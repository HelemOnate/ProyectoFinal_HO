# 📘 SYSTEM DOCUMENTATION

## 1. Project Information

Project Name: `MecanixPro`  
Student Name: `Helem Michel Oñate Caballero`  
Course: `Desarrollo Web`  
Semester: `8°`  
Date: 2025-11-15  
Instructor: `Jaider Quintero`

Short Project Description:
MecanixPro is a workshop management system that centralizes client, vehicle, mechanic, service, parts, appointments, work orders, and payments data. It streamlines operational workflows including scheduling, service execution, inventory usage, billing, and role-based access control.

## 2. System Architecture Overview

### 2.1 Architecture Description
The system follows a layered, service-oriented architecture:
* Frontend: Angular SPA consuming REST APIs, handling routing, state management (service-based), and UI rendering.
* Backend: Node.js + Express + TypeScript providing REST endpoints, using Sequelize ORM for database access.
* Database: Relational (MySQL or PostgreSQL compatible) with normalized tables and associative entities for work orders, services, parts, and user role mapping.
* Security: Role-based access control (RBAC), JWT authentication (access + refresh tokens), password reset flow, and protected routes middleware.
* Integration: JSON over HTTP with CORS proxy (see `frontend/proxy.conf.json`).

### 2.2 Technologies Used
- Frontend: Angular, TypeScript, HTML5, CSS3
- Backend: Node.js, Express, TypeScript, Sequelize
- Database Engine: Relational SQL (configured via Sequelize; adaptable to MySQL/PostgreSQL)
- Additional Libraries / Tools: JWT, bcrypt (assumed for password hashing), Nodemailer (mailer service), dotenv (configuration), REST client tooling (e.g. VS Code REST or Postman)

### 2.3 Visual explanation of the system’s operation

#### Architecture Diagram (ASCII or Image)

Or add a visual diagram:

![System Architecture Diagram](docs/backend/node.jpeg)

> _Guideline: Replace the above with your own diagram. Place the image in `docs/backend/node.jpeg` or update the path as needed._

## 3. Database Documentation (ENGLISH)

### 3.1 Database Description
The database stores core workshop operational entities: users (with intrinsic role enum), role mappings (if needed), clients and their vehicles, services offered, parts inventory, work orders (linking client, vehicle, mechanic, and service), appointments (scheduled service sessions), insurance policies, payments, and security tokens (refresh & password reset). Each table uses auto-increment integer primary keys (except associative or token tables) and enforces referential integrity through foreign keys.

### 3.2 ERD – Entity Relationship Diagram


![Entity Relationship Diagram](docs/backend/mecatronix2.png)    

> _Guideline: Replace the above with your own ERD image. Place the image in `docs/backend/mecatronix2.png` or update the path as needed._

### 3.3 Logical Model (Key Entities)
- User: Authentication + RBAC principal; stores profile and status.
- Role / UserRoleMap: Optional extended RBAC (enum plus mapping).
- Client: Customer identities.
- Vehicle: Client-owned assets; optionally linked to insurance.
- Mechanic: Staff performing services.
- Service: Catalog of labor operations (pricing + duration).
- Part: Inventory items consumed in work orders.
- WorkOrder: Central operational record aggregating client, vehicle, mechanic, labor, parts, timing, and costs.
- WorkOrderService / WorkOrderPart: Line-item detail for services and parts used.
- Appointment: Scheduled future service slot prior to (or leading into) work order creation.
- Payment: Financial transaction tied to a work order.
- Insurance: Coverage details for a vehicle.
- RefreshToken / PasswordResetToken: Security/session management.

### 3.4 Physical Model (Tables)
| Table | Column | Type | PK/FK | Description |
|-------|--------|------|-------|-------------|
| users | id | INT | PK | User identifier |
| users | username | VARCHAR(50) | UQ | Login name |
| users | email | VARCHAR(100) | UQ | Email address |
| users | password | VARCHAR(255) |  | Hashed password |
| users | role | ENUM |  | Primary role (ADMIN, MANAGER, etc.) |
| users | firstName | VARCHAR(50) |  | Given name |
| users | lastName | VARCHAR(50) |  | Family name |
| users | phone | VARCHAR(20) |  | Contact number |
| users | avatar | VARCHAR(255) |  | Avatar image URL |
| users | isActive | BOOLEAN |  | Active flag |
| users | lastLogin | DATETIME |  | Last login timestamp |
| users | refreshToken | TEXT |  | Latest refresh token (optional) |
| roles | id | INT | PK | Role identifier |
| roles | name | VARCHAR(50) | UQ | Role name |
| roles | description | VARCHAR(255) |  | Role description |
| user_roles | userId | INT | PK/FK users.id | User reference |
| user_roles | roleId | INT | PK/FK roles.id | Role reference |
| clients | id | INT | PK | Client identifier |
| clients | name | VARCHAR |  | Full name/business name |
| clients | address | VARCHAR |  | Physical address |
| clients | phone | VARCHAR |  | Contact phone |
| clients | email | VARCHAR | UQ | Contact email |
| clients | password | VARCHAR |  | (Optional) account password |
| clients | status | ENUM |  | ACTIVE/INACTIVE state |
| clients | active | BOOLEAN |  | Boolean active flag |
| mechanics | id | INT | PK | Mechanic identifier |
| mechanics | firstName | VARCHAR |  | Given name |
| mechanics | lastName | VARCHAR |  | Family name |
| mechanics | email | VARCHAR | UQ | Email |
| mechanics | phone | VARCHAR |  | Contact phone |
| mechanics | specialization | VARCHAR |  | Domain specialty |
| mechanics | experienceYears | INT |  | Experience in years |
| mechanics | hourlyRate | FLOAT |  | Labor rate per hour |
| mechanics | isAvailable | BOOLEAN |  | Availability flag |
| vehicles | id | INT | PK | Vehicle identifier |
| vehicles | licensePlate | VARCHAR | UQ | Plate number |
| vehicles | make | VARCHAR |  | Manufacturer division |
| vehicles | brand | VARCHAR |  | Brand name |
| vehicles | model | VARCHAR |  | Model designation |
| vehicles | year | INT |  | Manufacture year |
| vehicles | color | VARCHAR |  | Exterior color |
| vehicles | vin | VARCHAR | UQ | Vehicle Identification Number |
| vehicles | clientId | INT | FK clients.id | Owner client |
| vehicles | insuranceId | INT | FK insurances.id | Current insurance |
| vehicles | status | ENUM |  | ACTIVE/INACTIVE |
| vehicles | active | BOOLEAN |  | Active flag |
| services | id | INT | PK | Service identifier |
| services | name | VARCHAR |  | Service name |
| services | description | VARCHAR |  | Detailed description |
| services | category | VARCHAR |  | Service category |
| services | price | FLOAT |  | Base price |
| services | laborCost | FLOAT |  | Labor cost component |
| services | durationMinutes | INT |  | Expected duration |
| services | status | ENUM |  | ACTIVE/INACTIVE |
| services | active | BOOLEAN |  | Active flag |
| parts | id | INT | PK | Part identifier |
| parts | name | VARCHAR |  | Part name |
| parts | description | VARCHAR |  | Description |
| parts | partNumber | VARCHAR |  | Manufacturer part number |
| parts | brand | VARCHAR |  | Brand |
| parts | unitPrice | FLOAT |  | Purchase price per unit |
| parts | price | FLOAT |  | Sale price |
| parts | stock | INT |  | Inventory quantity |
| parts | status | ENUM |  | ACTIVE/INACTIVE |
| parts | active | BOOLEAN |  | Active flag |
| work_orders | id | INT | PK | Work order identifier |
| work_orders | clientId | INT | FK clients.id | Client reference |
| work_orders | vehicleId | INT | FK vehicles.id | Vehicle reference |
| work_orders | mechanicId | INT | FK mechanics.id | Mechanic reference |
| work_orders | serviceId | INT | FK services.id | Primary service |
| work_orders | description | VARCHAR |  | Summary description |
| work_orders | status | ENUM |  | Lifecycle state |
| work_orders | priority | ENUM |  | Priority level |
| work_orders | estimatedHours | FLOAT |  | Planned hours |
| work_orders | actualHours | FLOAT |  | Actual hours |
| work_orders | laborCost | FLOAT |  | Aggregated labor cost |
| work_orders | partsCost | FLOAT |  | Aggregated parts cost |
| work_orders | totalCost | FLOAT |  | Total cost |
| work_orders | startDate | DATETIME |  | Start timestamp |
| work_orders | endDate | DATETIME |  | End timestamp |
| work_orders | notes | VARCHAR |  | Optional notes |
| work_order_services | id | INT | PK | Line identifier |
| work_order_services | workOrderId | INT | FK work_orders.id | Parent work order |
| work_order_services | serviceId | INT | FK services.id | Linked service |
| work_order_services | hoursQuantity | FLOAT |  | Hours applied |
| work_order_services | subtotal | FLOAT |  | Line subtotal |
| work_order_parts | id | INT | PK | Line identifier |
| work_order_parts | workOrderId | INT | FK work_orders.id | Parent work order |
| work_order_parts | partId | INT | FK parts.id | Part used |
| work_order_parts | quantity | INT |  | Units consumed |
| work_order_parts | subtotal | FLOAT |  | Line subtotal |
| appointments | id | INT | PK | Appointment identifier |
| appointments | clientId | INT | FK clients.id | Client |
| appointments | vehicleId | INT | FK vehicles.id | Vehicle |
| appointments | mechanicId | INT | FK mechanics.id | Mechanic |
| appointments | serviceId | INT | FK services.id | Scheduled service |
| appointments | appointmentDate | DATETIME |  | Scheduled date/time |
| appointments | status | ENUM |  | Appointment status |
| appointments | notes | VARCHAR |  | Optional notes |
| payments | id | INT | PK | Payment identifier |
| payments | workOrderId | INT | FK work_orders.id | Related work order |
| payments | amount | FLOAT |  | Paid amount |
| payments | paymentMethod | VARCHAR |  | Method (cash/card/etc.) |
| payments | paymentDate | DATETIME |  | Payment timestamp |
| payments | status | ENUM |  | Transaction status |
| payments | transactionId | VARCHAR |  | External transaction ref |
| payments | notes | VARCHAR |  | Notes |
| insurances | id | INT | PK | Insurance identifier |
| insurances | vehicleId | INT | FK vehicles.id | Covered vehicle |
| insurances | companyName | VARCHAR |  | Insurer name |
| insurances | policyNumber | VARCHAR |  | Policy number |
| insurances | coverageType | VARCHAR |  | Coverage descriptor |
| insurances | startDate | DATETIME |  | Policy start |
| insurances | endDate | DATETIME |  | Policy end |
| insurances | premium | FLOAT |  | Premium amount |
| insurances | deductible | FLOAT |  | Deductible amount |
| refresh_tokens | id | INT | PK | Token row |
| refresh_tokens | userId | INT | FK users.id | Owning user |
| refresh_tokens | token | VARCHAR(255) | UQ | Refresh token value |
| refresh_tokens | expiresAt | DATETIME |  | Expiration |
| password_reset_tokens | id | INT | PK | Token row |
| password_reset_tokens | userId | INT | FK users.id | Owning user |
| password_reset_tokens | token | VARCHAR(255) | UQ | Reset token value |
| password_reset_tokens | expiresAt | DATETIME |  | Expiration |
| password_reset_tokens | used | BOOLEAN |  | Usage flag |

## 4. Use Cases – CRUD

Representative entity: Client (repeat similarly for Vehicle, Work Order, Service, Part, Appointment, Payment).

### 4.1 Use Case: Create Client
Actor: Staff (Receptionist / Manager / Admin)  
Description: Registers a new client with contact information to enable vehicle registration and service scheduling.  
Preconditions: Actor authenticated; client email not already registered.  
Postconditions: Client record persisted; appears in client listings.  
Main Flow:
1. Actor opens “New Client” form.
2. Provides name, address, phone, email.
3. System validates uniqueness of email.
4. System persists record and returns 201 + JSON payload.
5. UI refreshes list.

### 4.2 Use Case: Read Client
Actor: Staff  
Description: Retrieve client details for review or editing.  
Preconditions: Client exists.  
Postconditions: Details displayed.  
Main Flow: Actor requests `/clients/:id` → system returns JSON.

### 4.3 Use Case: Update Client
Actor: Staff  
Description: Modify existing client contact info or status.  
Preconditions: Client exists; actor authorized.  
Postconditions: Changes saved; timestamps updated.  
Main Flow: Actor sends PUT with modified fields → validation → persistence → 200 OK.

### 4.4 Use Case: Delete Client
Actor: Admin or Manager  
Description: Remove a client (soft or hard delete depending on implementation).  
Preconditions: Actor has elevated role; client not linked to active work orders (business rule).  
Postconditions: Record deleted or marked inactive.  
Main Flow: DELETE request → authorization check → deletion → 200 or 204 response.

Additional Use Cases (Summaries):
- Create Work Order: Mechanic/Manager defines scope, links vehicle & client, calculates estimates.
- Update Work Order Status: Mechanic progresses lifecycle from pending → in-progress → completed.
- Add Part to Work Order: Mechanic adds part line; system recalculates costs.
- Register Payment: Staff records payment; system marks work order as financially settled.
- Schedule Appointment: Staff sets future slot; system prevents double booking (rule).

## 5. Backend Documentation

### 5.1 Backend Architecture
The backend is modular with separation of concerns:
* Routes: Define endpoints and middleware chain.
* Controllers: Orchestrate request handling, call services, shape responses.
* Models: Sequelize definitions (schema + associations).
* Middleware: Auth, role checks, validation.
* Services: Business logic (e.g., authentication, mailing).
* Utils: Helper utilities (e.g., diff generator).

### 5.2 Folder Structure
```
backend/
  src/
    index.ts
    seed.ts
    config/
      database.ts
      index.ts
    controllers/
      *.controller.ts
    middleware/
      auth.middleware.ts
    models/
      *.model.ts
      associations.ts
    routes/
      *.routes.ts
    scripts/
      seed-roles.ts
    services/
      auth.service.ts
      mailer.service.ts
    utils/
      diff.util.ts
```

### 5.3 API Documentation (REST) (Selected Endpoints)

Base Path: `/api`

| Method | Path | Description | Auth | Roles |
|--------|------|-------------|------|-------|
| POST | /auth/register | Register new user | No | - |
| POST | /auth/login | Authenticate user | No | - |
| POST | /auth/refresh | Refresh JWT | No | - |
| GET | /auth/profile | Get current user profile | Yes | Any authenticated |
| PUT | /auth/profile | Update current user profile | Yes | Any authenticated |
| GET | /auth/users | List all users | Yes | Admin/Manager |
| PUT | /auth/users/:userId/role | Update user role | Yes | Admin/Manager |
| GET | /clients | List clients | Yes | Staff |
| POST | /clients | Create client | Yes | Staff |
| GET | /clients/:id | Get client | Yes | Staff |
| PUT | /clients/:id | Update client | Yes | Staff |
| DELETE | /clients/:id | Delete client | Yes | Admin/Manager |
| GET | /mechanics | List mechanics | Yes | Staff |
| POST | /mechanics | Create mechanic | Yes | Admin/Manager |
| PUT | /mechanics/:id | Update mechanic | Yes | Admin/Manager |
| DELETE | /mechanics/:id | Delete mechanic | Yes | Admin/Manager |
| GET | /vehicles | List vehicles | Yes | Staff |
| POST | /vehicles | Create vehicle | Yes | Staff |
| GET | /vehicles/:id | Get vehicle | Yes | Staff |
| DELETE | /vehicles/:id | Delete vehicle | Yes | Admin/Manager |
| GET | /services | List services | Yes | Staff |
| POST | /services | Create service | Yes | Admin/Manager |
| GET | /parts | List parts | Yes | Staff |
| POST | /parts | Create part | Yes | Admin/Manager |
| GET | /work-orders | List work orders | Yes | Staff |
| POST | /work-orders | Create work order | Yes | Mechanic or higher |
| PUT | /work-orders/:id | Update work order | Yes | Mechanic or higher |
| DELETE | /work-orders/:id | Delete work order | Yes | Admin/Manager |
| GET | /work-order-parts | List work order part lines | Yes | Mechanic or higher |
| POST | /work-order-parts | Create part line | Yes | Mechanic or higher |
| GET | /work-order-services | List work order service lines | Yes | Mechanic or higher |
| POST | /work-order-services | Create service line | Yes | Mechanic or higher |
| GET | /appointments | List appointments | Yes | Staff |
| POST | /appointments | Create appointment | Yes | Staff |
| GET | /payments | List payments | Yes | Staff |
| POST | /payments | Create payment | Yes | Staff |

Example Endpoint Detail:

Method Path: `POST /api/clients`

Purpose: Create a new client record.

Request Body Example:
```json
{
  "name": "John Doe",
  "address": "123 Main St",
  "phone": "+1-555-1234",
  "email": "john@example.com"
}
```

Responses:
- 201 Created: `{ "id": 10, "name": "John Doe", ... }`
- 400 Bad Request: Validation errors
- 401 Unauthorized / 403 Forbidden: Missing or insufficient role

### 5.4 REST Client
Use Postman or VS Code REST Client. Typical flow:
1. `POST /auth/login` → store access & refresh tokens.
2. Include `Authorization: Bearer <accessToken>` in protected requests.
3. Refresh via `POST /auth/refresh` before expiry.
4. Chain create operations: client → vehicle → work-order → add parts/services → payment.

## 6. Frontend Documentation

### 6.1 Technical Frontend Documentation
Framework Used: Angular (TypeScript). The SPA leverages component modularity, services for API abstraction, and environment configuration for base URLs.

Folder Structure (simplified):
```
frontend/
  src/
    main.ts
    index.html
    styles.css
    app/
      app.module.ts
      core/ (auth, interceptors)
      shared/ (reusable components, directives, pipes)
      features/
        clients/
        vehicles/
        work-orders/
        appointments/
        inventory/ (parts)
        services/
        auth/
```
Models: Define TypeScript interfaces aligning with backend payloads (e.g., Client, Vehicle, WorkOrder).  
Services: Angular injectable classes encapsulating HTTP calls (`HttpClient`).  
Components: Presentational + container components managing forms, lists, and detail views.  
State Handling: Service-based; could evolve to NgRx if complexity increases.  
Error Handling: Central HTTP interceptor for auth errors (401/403) and refresh logic.  

### 6.2 Visual explanation of the system’s operation
User navigates SPA routes → Components invoke Services → Services call RESVT endpoints → Responses update UI state → Interceptors handle token refresh → Global styles and shared components ensure consistency.

#### UI Screenshot Example
![UI Screenshot](docs/login.png)
![UI Screenshot](docs/dashboard.png)
![UI Screenshot](docs//seeder.png)
![UI Screenshot](docs/client/clientes-lista.png)

> _Guideline: Add representative screenshots of the main UI, such as dashboard, client list, work order form, etc. Place images in `docs/ui-screenshot.png` or similar._

## 7. Frontend–Backend Integration
Authentication: Login returns access & refresh tokens; access token attached to `Authorization` header. Refresh token exchanged for new access when near expiry.
CRUD Flow: Frontend services map form models to DTOs and send POST/PUT; optimistic UI updates after success. Lists refreshed by re-query or local state patch.
Error Handling: 4xx triggers validation messaging; 401 triggers re-auth flow; 500 displays generic error banner.
Security: Protected Angular routes (Route Guards) ensure only authenticated users access restricted views.
Data Consistency: Work order cost recalculations retrieved via re-fetch after line-item changes.

## 8. Conclusions & Recommendations
Strengths:
* Clear separation of concerns (controllers, services, models).
* Extensive domain coverage (labor, parts, scheduling, payments).
* Role-based security reduces unauthorized access risk.

Recommendations:
1. Add automated tests (Jest + Supertest for backend; Jasmine/Karma or Cypress for frontend).
2. Implement pagination for large listings (clients, work orders, parts).
3. Introduce caching or ETag headers for frequently read resources.
4. Add soft-delete flags and audit trail (createdBy, updatedBy) for compliance.
5. Externalize configuration via environment variables and secrets management.
6. Implement WebSocket or SSE for real-time work order status updates.
7. Add inventory reorder threshold logic for parts.

## 9. Annexes (Optional)
Potential Annex Ideas:
- Postman collection
- ERD diagram image (visual)
- Test coverage report
- Performance benchmark summary

---
Document generated: 2025-11-15. Please replace placeholders before submission.
