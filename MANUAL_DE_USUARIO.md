# Manual de Usuario - MecanixPro

**Versión:** 1.0  
**Fecha:** 15 de noviembre de 2025  
**Sistema:** MecanixPro - Sistema de Gestión de Taller Automotriz

---

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Requisitos del Sistema](#requisitos-del-sistema)
3. [Acceso al Sistema](#acceso-al-sistema)
4. [Interfaz Principal](#interfaz-principal)
5. [Módulos del Sistema](#módulos-del-sistema)
   - [5.1 Gestión de Clientes](#51-gestión-de-clientes)
   - [5.2 Gestión de Vehículos](#52-gestión-de-vehículos)
   - [5.3 Gestión de Seguros](#53-gestión-de-seguros)
   - [5.4 Gestión de Mecánicos](#54-gestión-de-mecánicos)
   - [5.5 Gestión de Servicios](#55-gestión-de-servicios)
   - [5.6 Gestión de Repuestos](#56-gestión-de-repuestos)
   - [5.7 Gestión de Citas](#57-gestión-de-citas)
   - [5.8 Gestión de Órdenes de Trabajo](#58-gestión-de-órdenes-de-trabajo)
   - [5.9 Gestión de Pagos](#59-gestión-de-pagos)
6. [Backend y API REST](#6-backend-y-api-rest)
   - [6.1 Arquitectura del Backend](#61-arquitectura-del-backend)
   - [6.2 Endpoints de la API](#62-endpoints-de-la-api)
   - [6.3 Autenticación y Seguridad](#63-autenticación-y-seguridad)
   - [6.4 Base de Datos](#64-base-de-datos)
   - [6.5 Testing de API con Postman](#65-testing-de-api-con-postman)
7. [Preguntas Frecuentes](#preguntas-frecuentes)
8. [Soporte Técnico](#soporte-técnico)

---

## 1. Introducción

MecanixPro es un sistema integral de gestión para talleres automotrices que permite administrar de manera eficiente todas las operaciones del taller, incluyendo:

- Registro y seguimiento de clientes
- Control de vehículos y sus historiales de servicio
- Gestión de mecánicos y su disponibilidad
- Programación de citas
- Creación y seguimiento de órdenes de trabajo
- Control de inventario de repuestos
- Gestión de pagos y facturación
- Administración de seguros

### 1.1 Objetivo del Manual

Este manual tiene como objetivo guiar a los usuarios en el uso correcto del sistema MecanixPro, explicando paso a paso cada una de las funcionalidades disponibles.

### 1.2 Usuarios del Sistema

El sistema está diseñado para ser utilizado por:
- **Administradores:** Acceso completo a todas las funcionalidades
- **Recepcionistas:** Gestión de citas, clientes y órdenes de trabajo
- **Mecánicos:** Consulta y actualización de órdenes de trabajo asignadas
- **Contadores:** Gestión de pagos y reportes financieros

---

## 2. Requisitos del Sistema

### 2.1 Requisitos de Hardware
- **Procesador:** Intel Core i3 o superior
- **Memoria RAM:** Mínimo 4 GB
- **Espacio en Disco:** 500 MB libres
- **Conexión a Internet:** Requerida

### 2.2 Requisitos de Software
- **Navegador Web:** 
  - Google Chrome (versión 90 o superior) - Recomendado
  - Mozilla Firefox (versión 88 o superior)
  - Microsoft Edge (versión 90 o superior)
- **Sistema Operativo:** Windows 10/11, macOS, Linux

---

## 3. Acceso al Sistema

### 3.1 URL de Acceso

Para acceder al sistema, abra su navegador web e ingrese la siguiente dirección:

```
http://localhost:4200
```

*Nota: La URL puede variar según la configuración del servidor.*

### 3.2 Pantalla de Inicio de Sesión

![Pantalla de Login](./docs/login.png)

**Pasos para iniciar sesión:**

1. Ingrese su **nombre de usuario** en el campo correspondiente
2. Ingrese su **contraseña**
3. Haga clic en el botón **"Iniciar Sesión"**

> **Nota:** Si olvidó su contraseña, haga clic en el enlace "¿Olvidó su contraseña?" para recuperarla.

### 3.3 Credenciales por Defecto

Para el primer acceso, utilice las siguientes credenciales:

- **Usuario:** admin
- **Contraseña:** admin123

> **Importante:** Se recomienda cambiar la contraseña después del primer inicio de sesión.

---

## 4. Interfaz Principal

### 4.1 Descripción de la Interfaz

![Interfaz Principal](./docs/dashboard.png)

La interfaz principal del sistema está compuesta por:

1. **Barra Superior:** 
   - Logo del sistema
   - Nombre de usuario activo
   - Botón de notificaciones
   - Botón de cierre de sesión

2. **Menú Lateral (Sidebar):**
   - Dashboard
   - Clientes
   - Vehículos
   - Seguros
   - Mecánicos
   - Servicios
   - Repuestos
   - Citas
   - Órdenes de Trabajo
   - Pagos
![Interfaz Principal](./docs/seeder.png)   

3. **Área de Contenido Principal:**
   - Muestra el contenido del módulo seleccionado
   - Incluye tablas, formularios y gráficos según corresponda

4. **Panel de Estadísticas (Dashboard):**
   - Resumen de operaciones diarias
   - Indicadores clave de desempeño
   - Gráficos estadísticos

---

## 5. Módulos del Sistema

## 5.1 Gestión de Clientes

El módulo de clientes permite registrar, consultar, actualizar y eliminar información de los clientes del taller.

### 5.1.1 Listar Clientes

![Lista de Clientes](./docs/client/clientes-lista.png)

**Funcionalidades disponibles:**

- **Búsqueda:** Utilice el campo de búsqueda para filtrar clientes por nombre, documento o teléfono
- **Ordenamiento:** Haga clic en las cabeceras de las columnas para ordenar
- **Paginación:** Navegue entre páginas usando los controles en la parte inferior
- **Acciones:** Cada registro incluye botones para ver, editar o eliminar

**Columnas mostradas:**
- ID
- Nombre completo
- Documento de identidad
- Teléfono
- Email
- Dirección
- Acciones

### 5.1.2 Crear Nuevo Cliente

![Formulario Crear Cliente](./docs/client/clientes-crear.png)

**Pasos para crear un cliente:**

1. Haga clic en el botón **"+ Nuevo Cliente"**
2. Complete el formulario con los siguientes datos:
   - **Nombre:** Nombre completo del cliente
   - **Documento:** Número de identificación
   - **Tipo de Documento:** Seleccione el tipo (DNI, Pasaporte, etc.)
   - **Teléfono:** Número de contacto
   - **Email:** Correo electrónico
   - **Dirección:** Dirección completa
   - **Ciudad:** Ciudad de residencia
   - **Código Postal:** (Opcional)
3. Haga clic en **"Guardar"** para registrar el cliente
4. Haga clic en **"Cancelar"** para cerrar sin guardar

> **Nota:** Los campos marcados con asterisco (*) son obligatorios.

### 5.1.3 Ver Detalles del Cliente

![Detalle de Cliente](./docs/client/clientes-detalle.png)

Para ver los detalles completos de un cliente:

1. En la lista de clientes, haga clic en el botón **"Ver"** (ícono de ojo) del cliente deseado
2. Se mostrará una ventana con toda la información del cliente:
   - Datos personales
   - Historial de vehículos registrados
   - Historial de servicios
   - Órdenes de trabajo asociadas

### 5.1.4 Editar Cliente

![Formulario Editar Cliente](./docs/client/clientes-editar.png)

**Pasos para editar un cliente:**

1. En la lista de clientes, haga clic en el botón **"Editar"** (ícono de lápiz)
2. Modifique los campos necesarios en el formulario
3. Haga clic en **"Actualizar"** para guardar los cambios
4. Se mostrará un mensaje de confirmación

### 5.1.5 Eliminar Cliente

![Confirmación Eliminar Cliente](./docs/client/clientes-eliminar.png)

**Pasos para eliminar un cliente:**

1. En la lista de clientes, haga clic en el botón **"Eliminar"** (ícono de papelera)
2. Confirme la acción en el cuadro de diálogo
3. El cliente será eliminado del sistema

> **Advertencia:** Esta acción no se puede deshacer. Solo se pueden eliminar clientes que no tengan registros asociados (vehículos, órdenes de trabajo, etc.).

---

## 5.2 Gestión de Vehículos

El módulo de vehículos permite administrar toda la información relacionada con los vehículos de los clientes.

### 5.2.1 Listar Vehículos

![Lista de Vehículos](./docs/vehiculo/vehiculos-lista.png)

**Información mostrada:**
- Placa del vehículo
- Marca
- Modelo
- Año
- Cliente propietario
- Estado
- Acciones

**Filtros disponibles:**
- Por cliente
- Por marca
- Por año
- Por estado

### 5.2.2 Registrar Nuevo Vehículo

![Formulario Nuevo Vehículo](./docs/vehiculo/vehiculos-crear.png)

**Campos del formulario:**

1. **Información del Vehículo:**
   - Placa/Patente 
   - Marca 
   - Modelo 
   - Año 
   - Color
   - Número de Motor
   - Número de Chasis/VIN

2. **Información del Propietario:**
   - Seleccionar Cliente * (búsqueda desplegable)
   - Fecha de Registro

3. **Información Adicional:**
   - Kilometraje actual
   - Tipo de combustible
   - Transmisión (Manual/Automática)
   - Observaciones

**Pasos:**
1. Haga clic en **"+ Nuevo Vehículo"**
2. Complete todos los campos obligatorios
3. Seleccione el cliente propietario
4. Haga clic en **"Guardar"**

### 5.2.3 Ver Historial del Vehículo

![Historial de Vehículo](./docs/vehiculo/vehiculos-historial.png)

El historial muestra:
- Órdenes de trabajo realizadas
- Servicios aplicados
- Repuestos utilizados
- Fecha de cada intervención
- Kilometraje registrado
- Costo total de cada servicio

### 5.2.4 Editar Vehículo

![Editar Vehículo](./docs/vehiculo/vehiculos-editar.png)

Puede actualizar:
- Kilometraje actual
- Estado del vehículo
- Observaciones
- Cambio de propietario (si aplica)

### 5.2.5 Eliminar Vehículo

Similar al proceso de eliminación de clientes, con confirmación obligatoria.

---
![Editar Vehículo](./docs/vehiculo/vehiculos-eliminar.png)
## 5.3 Gestión de Seguros

### 5.3.1 Listar Seguros

![Lista de Seguros](./docs/seguro/seguros-lista.png)

**Información mostrada:**
- Compañía de seguros
- Número de póliza
- Vehículo asegurado
- Fecha de inicio
- Fecha de vencimiento
- Estado (Vigente/Vencido)
- Acciones

### 5.3.2 Registrar Nuevo Seguro

![Formulario Nuevo Seguro](./docs/seguro/seguros-crear.png)

**Campos requeridos:**
- Compañía de Seguros 
- Número de Póliza 
- Vehículo Asegurado  (seleccionar de la lista)
- Fecha de Inicio 
- Fecha de Vencimiento 
- Cobertura
- Monto Asegurado
- Deducible
- Observaciones

### 5.3.3 Alertas de Vencimiento

El sistema muestra alertas automáticas cuando:
- Un seguro está próximo a vencer (30 días antes)
- Un seguro ha vencido

### 5.3.4 Editar y Renovar Seguro

![Editar Seguro](./docs/seguro/seguros-editar.png)

Permite actualizar fechas y renovar pólizas.

---

## 5.4 Gestión de Mecánicos

### 5.4.1 Listar Mecánicos

![Lista de Mecánicos](./docs/mecanico/mecanicos-lista.png)

**Columnas:**
- ID
- Nombre completo
- Especialidad
- Documento
- Teléfono
- Email
- Estado (Activo/Inactivo)
- Disponibilidad
- Acciones

### 5.4.2 Registrar Nuevo Mecánico

![Formulario Nuevo Mecánico](./docs/mecanico/mecanicos-crear.png)

**Datos personales:**
- Nombre completo 
- Documento de identidad 
- Fecha de nacimiento
- Teléfono 
- Email 
- Dirección

**Datos profesionales:**
- Especialidad * (Motor, Transmisión, Electricidad, etc.)
- Años de experiencia
- Certificaciones
- Fecha de contratación
- Salario (opcional)


### 5.4.4 Asignar Disponibilidad

Configure días y horarios de trabajo de cada mecánico para la programación de citas y órdenes de trabajo.

---

## 5.5 Gestión de Servicios

### 5.5.1 Catálogo de Servicios

![Catálogo de Servicios](./docs/servicio/servicios-lista.png)

**Servicios disponibles:**
- Mantenimiento preventivo
- Cambio de aceite
- Alineación y balanceo
- Reparación de frenos
- Reparación de motor
- Reparación de transmisión
- Diagnóstico computarizado
- Otros servicios personalizados

### 5.5.2 Crear Nuevo Servicio

![Crear Servicio](./docs/servicio/servicios-crear.png)

**Información del servicio:**
- Nombre del servicio 
- Descripción 
- Categoría 
- Precio base 
- Duración estimada (en horas) 
- Requiere repuestos (Sí/No)
- Observaciones

### 5.5.3 Editar Servicio

Actualice precios, descripciones o duración estimada de los servicios existentes.

![Crear Servicio](./docs/servicio/servicios-editar.png)
### 5.5.4 Activar/Desactivar Servicios

Los servicios pueden desactivarse temporalmente sin necesidad de eliminarlos del sistema.

---

## 5.6 Gestión de Repuestos

### 5.6.1 Inventario de Repuestos

![Inventario de Repuestos](./docs/repuestos/repuestos-lista.png)

**Información mostrada:**
- Código del repuesto
- Nombre/Descripción
- Categoría
- Marca
- Cantidad en stock
- Precio unitario
- Ubicación en almacén
- Estado (Disponible/Agotado/Por debajo del mínimo)

### 5.6.2 Registrar Nuevo Repuesto

![Crear Repuesto](./docs/repuestos/repuestos-crear.png)

**Datos del repuesto:**
- Código/SKU 
- Nombre 
- Descripción
- Categoría 
- Marca
- Modelo compatible
- Precio de compra 
- Precio de venta 
- Stock actual 
- Stock mínimo 
- Ubicación
- Proveedor

### 5.6.3 Actualizar Stock

![Actualizar Stock](./docs/repuestos/repuestos-stock.png)

**Movimientos de inventario:**
- Entrada de mercancía (compras)
- Salida de mercancía (ventas/uso en servicios)
- Ajustes de inventario
- Devoluciones

Cada movimiento queda registrado con:
- Fecha y hora
- Cantidad
- Tipo de movimiento
- Usuario responsable
- Observaciones

### 5.6.4 Alertas de Stock

El sistema genera alertas automáticas cuando:
- Un repuesto está por debajo del stock mínimo
- Un repuesto está agotado
- Repuestos próximos a vencer (si aplica)

---

## 5.7 Gestión de Citas

### 5.7.1 Calendario de Citas

![Calendario de Citas](./docs/citas/citas-calendario.png)

**Vistas disponibles:**
- Vista diaria
- Vista semanal
- Vista mensual

**Código de colores:**
- 🟦 Azul: Cita programada
- 🟨 Amarillo: Cita en progreso
- 🟩 Verde: Cita completada
- 🟥 Rojo: Cita cancelada

### 5.7.2 Programar Nueva Cita

![Nueva Cita](./docs/citas/citas-crear.png)

**Pasos para agendar:**

1. Seleccione la fecha en el calendario
2. Complete el formulario:
   - Cliente * (buscar o crear nuevo)
   - Vehículo * (seleccionar vehículo del cliente)
   - Fecha y Hora *
   - Servicio(s) solicitado(s) *
   - Mecánico asignado (opcional)
   - Duración estimada
   - Prioridad (Baja/Media/Alta)
   - Observaciones

3. Haga clic en **"Agendar Cita"**

El sistema validará:
- Disponibilidad del mecánico
- No solapamiento de citas
- Horario de atención del taller

### 5.7.3 Ver Detalles de la Cita

![Detalle de Cita](./docs/citas/citas-detalle.png)

Información completa:
- Datos del cliente y vehículo
- Servicios solicitados
- Mecánico asignado
- Fecha y hora
- Estado actual
- Historial de cambios

### 5.7.4 Modificar Cita

![Editar Cita](./docs/citas/citas-editar.png)

Puede modificar:
- Fecha y hora
- Servicios
- Mecánico asignado
- Observaciones

### 5.7.5 Cancelar Cita

Al cancelar una cita, debe indicar:
- Motivo de cancelación
- Si desea reprogramar
- Observaciones adicionales

### 5.7.6 Notificaciones

El sistema envía recordatorios automáticos:
- 24 horas antes de la cita (SMS/Email)
- 2 horas antes de la cita (SMS)

---

## 5.8 Gestión de Órdenes de Trabajo

### 5.8.1 Listar Órdenes de Trabajo

![Lista de Órdenes](./docs/orden/ordenes-lista.png)

**Estados de una orden:**
- 📋 Pendiente
- 🔧 En progreso
- ✅ Completada
- ❌ Cancelada
- ⏸️ En espera (falta de repuestos, aprobación, etc.)

**Filtros:**
- Por estado
- Por mecánico
- Por cliente
- Por fecha
- Por vehículo

### 5.8.2 Crear Nueva Orden de Trabajo

![Nueva Orden de Trabajo](./docs/orden/ordenes-crear.png)

**Sección 1: Información General**
- Número de orden (generado automáticamente)
- Fecha de creación
- Cliente *
- Vehículo *
- Kilometraje actual *
- Mecánico asignado *
- Fecha estimada de entrega *

**Sección 2: Servicios a Realizar**
- Agregar servicios del catálogo
- Especificar cantidad y precio
- Subtotal por servicio

**Sección 3: Repuestos Necesarios**
- Buscar y agregar repuestos del inventario
- Especificar cantidad
- Verificar disponibilidad en stock
- Precio unitario y subtotal

**Sección 4: Costos**
- Subtotal servicios
- Subtotal repuestos
- Descuentos (si aplica)
- Impuestos
- **Total**

**Sección 5: Observaciones**
- Diagnóstico inicial
- Problemas detectados
- Recomendaciones
- Notas internas

### 5.8.3 Ver Orden de Trabajo

![Detalle de Orden](./docs/orden/ordenes-detalle.png)

Vista completa con:
- Toda la información de la orden
- Línea de tiempo del progreso
- Fotos del vehículo (antes/durante/después)
- Firma del cliente (aprobación)

### 5.8.4 Actualizar Progreso

![Progreso de Orden](./docs/orden/ordenes-progreso.png)

El mecánico puede:
- Actualizar el estado
- Registrar tiempo trabajado
// ...existing code...
Al completar:
1. Revisar todos los servicios realizados
2. Confirmar repuestos utilizados
3. Verificar totales
4. Obtener firma del cliente
5. Generar factura/recibo
6. Cambiar estado a "Completada"


## 5.9 Gestión de Pagos

### 5.9.1 Registro de Pagos


**Información mostrada:**
- Número de recibo
- Fecha de pago
- Cliente
- Orden de trabajo asociada
- Método de pago
- Monto
- Estado (Pagado/Pendiente/Parcial)

### 5.9.2 Registrar Nuevo Pago

![Nuevo Pago](./docs/pagos/pagos-crear.png)

**Datos del pago:**
- Orden de trabajo * (seleccionar)
- Monto total de la orden
- Monto a pagar *
- Método de pago * (Efectivo/Tarjeta/Transferencia/Cheque/Otro)
- Fecha de pago *
- Número de referencia (para transferencias/tarjetas)
- Observaciones

**Métodos de pago disponibles:**
- 💵 Efectivo
- 💳 Tarjeta de débito
- 💳 Tarjeta de crédito
- 🏦 Transferencia bancaria
- 📝 Cheque
- 📱 Pago móvil
- 🔄 Otro

### 5.9.3 Ver Comprobante de Pago

![Comprobante de Pago](./docs/pagos/agos-comprobante.png)

El comprobante incluye:
- Número de recibo
- Fecha y hora
- Datos del cliente
- Detalle del pago
- Método de pago
- Saldo anterior y nuevo saldo
- Código QR (opcional)

---

## 6. Backend y API REST

### 6.1 Arquitectura del Backend

El backend de MecanixPro está construido con las siguientes tecnologías:

![Arquitectura Backend](./docs/backend/back.png)

**Stack Tecnológico:**
- **Node.js**: Entorno de ejecución JavaScript
- **Express.js**: Framework web para Node.js
- **TypeScript**: Tipado estático para JavaScript
- **Sequelize ORM**: Object-Relational Mapping para bases de datos
- **JWT**: JSON Web Tokens para autenticación
- **Bcrypt**: Encriptación de contraseñas

**Bases de Datos Soportadas:**
- ✅ MySQL
- ✅ PostgreSQL
- ✅ SQL Server (MSSQL)
- ✅ Oracle Database
- ✅ SQLite (desarrollo)

**Estructura de Carpetas:**
```
backend/
├── src/
│   ├── config/          # Configuración de BD y variables
│   ├── controllers/     # Lógica de negocio
│   ├── middleware/      # Middleware de autenticación
│   ├── models/          # Modelos de datos (Sequelize)
│   ├── routes/          # Definición de rutas API
│   ├── services/        # Servicios (email, auth, etc.)
│   ├── utils/           # Utilidades
│   ├── scripts/         # Scripts de inicialización
│   ├── index.ts         # Punto de entrada
│   └── seed.ts          # Datos de prueba
├── package.json
└── tsconfig.json
```

### 6.2 Endpoints de la API

La API REST está disponible en: `http://localhost:3001/api`

#### 6.2.1 Autenticación

![Endpoints Auth](./docs/backend/login.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Registrar nuevo usuario | No |
| POST | `/api/auth/login` | Iniciar sesión | No |
| POST | `/api/auth/refresh` | Renovar token | Sí |
| POST | `/api/auth/logout` | Cerrar sesión | Sí |
| POST | `/api/auth/forgot-password` | Recuperar contraseña | No |
| POST | `/api/auth/reset-password` | Restablecer contraseña | No |

**Ejemplo de Login:**
```json
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@mecanixpro.com",
  "password": "admin123"
}
```

**Respuesta:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@mecanixpro.com",
    "name": "Administrador",
    "role": "admin"
  }
}
```

#### 6.2.2 Clientes (Clients)

![Endpoints Clientes](./docs/backend/cliente.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| GET | `/api/clients` | Listar todos los clientes | Sí |
| GET | `/api/clients/:id` | Obtener cliente por ID | Sí |
| POST | `/api/clients` | Crear nuevo cliente | Sí |
| PUT | `/api/clients/:id` | Actualizar cliente | Sí |
| DELETE | `/api/clients/:id` | Eliminar cliente | Sí |

**Ejemplo - Crear Cliente:**
```json
POST /api/clients
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Juan Pérez",
  "document": "12345678",
  "documentType": "DNI",
  "phone": "+1234567890",
  "email": "juan.perez@email.com",
  "address": "Calle Principal 123",
  "city": "Ciudad",
  "postalCode": "12345"
}
```

#### 6.2.3 Vehículos (Vehicles)

![Endpoints Vehículos](./docs/backend/vehiculo.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| GET | `/api/vehicles` | Listar todos los vehículos | Sí |
| GET | `/api/vehicles/:id` | Obtener vehículo por ID | Sí |
| GET | `/api/vehicles/client/:clientId` | Vehículos por cliente | Sí |
| POST | `/api/vehicles` | Registrar nuevo vehículo | Sí |
| PUT | `/api/vehicles/:id` | Actualizar vehículo | Sí |
| DELETE | `/api/vehicles/:id` | Eliminar vehículo | Sí |
**Ejemplo - Registrar Vehículo:**
```json
POST /api/vehicles
Authorization: Bearer {token}
Content-Type: application/json

{
  "plate": "ABC123",
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2020,
  "color": "Rojo",
  "engineNumber": "ENG123456",
  "chassisNumber": "CHS654321",
  "clientId": 1,
  "mileage": 35000
}
```

**Ejemplo - Respuesta:**
```json
{
  "success": true,
  "vehicle": {
    "id": 1,
    "plate": "ABC123",
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "clientId": 1
  }
}
```

#### 6.2.4 Seguros (Insurance)

![Endpoints Seguros](./docs/backend/seguro.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| GET | `/api/insurance` | Listar todos los seguros | Sí |
| GET | `/api/insurance/:id` | Obtener seguro por ID | Sí |
| GET | `/api/insurance/vehicle/:vehicleId` | Seguros por vehículo | Sí |
| POST | `/api/insurance` | Registrar nuevo seguro | Sí |
| PUT | `/api/insurance/:id` | Actualizar seguro | Sí |
| DELETE | `/api/insurance/:id` | Eliminar seguro | Sí |
**Ejemplo - Registrar Seguro:**
```json
POST /api/insurance
Authorization: Bearer {token}
Content-Type: application/json

{
  "company": "Seguros S.A.",
  "policyNumber": "POL123456",
  "vehicleId": 1,
  "startDate": "2025-01-01",
  "endDate": "2026-01-01",
  "coverage": "Total",
  "amount": 5000,
  "deductible": 500
}
```

**Ejemplo - Respuesta:**
```json
{
  "success": true,
  "insurance": {
    "id": 1,
    "company": "Seguros S.A.",
    "policyNumber": "POL123456",
    "vehicleId": 1
  }
}
```

#### 6.2.5 Mecánicos (Mechanics)

![Endpoints Mecánicos](./docs/backend/mecanico.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| GET | `/api/mechanics` | Listar todos los mecánicos | Sí |
| GET | `/api/mechanics/:id` | Obtener mecánico por ID | Sí |
| GET | `/api/mechanics/:id/availability` | Ver disponibilidad | Sí |
| POST | `/api/mechanics` | Registrar nuevo mecánico | Sí |
| PUT | `/api/mechanics/:id` | Actualizar mecánico | Sí |
| DELETE | `/api/mechanics/:id` | Eliminar mecánico | Sí |
**Ejemplo - Registrar Mecánico:**
```json
POST /api/mechanics
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Carlos López",
  "document": "98765432",
  "specialty": "Motor",
  "phone": "+1234567891",
  "email": "carlos.lopez@email.com",
  "address": "Av. Central 456"
}
```

**Ejemplo - Respuesta:**
```json
{
  "success": true,
  "mechanic": {
    "id": 1,
    "name": "Carlos López",
    "specialty": "Motor"
  }
}
```

#### 6.2.6 Servicios (Services)

![Endpoints Servicios](./docs/backend/servicios.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| GET | `/api/services` | Listar todos los servicios | Sí |
| GET | `/api/services/:id` | Obtener servicio por ID | Sí |
| GET | `/api/services/category/:category` | Servicios por categoría | Sí |
| POST | `/api/services` | Crear nuevo servicio | Sí |
| PUT | `/api/services/:id` | Actualizar servicio | Sí |
| DELETE | `/api/services/:id` | Eliminar servicio | Sí |
**Ejemplo - Crear Servicio:**
```json
POST /api/services
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Cambio de aceite",
  "description": "Cambio de aceite y filtro",
  "category": "Mantenimiento",
  "price": 40,
  "duration": 1
}
```

**Ejemplo - Respuesta:**
```json
{
  "success": true,
  "service": {
    "id": 1,
    "name": "Cambio de aceite",
    "category": "Mantenimiento"
  }
}
```

#### 6.2.7 Repuestos (Parts)

![Endpoints Repuestos](./docs/backend/partes.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| GET | `/api/parts` | Listar todos los repuestos | Sí |
| GET | `/api/parts/:id` | Obtener repuesto por ID | Sí |
| GET | `/api/parts/low-stock` | Repuestos con stock bajo | Sí |
| POST | `/api/parts` | Registrar nuevo repuesto | Sí |
| PUT | `/api/parts/:id` | Actualizar repuesto | Sí |
| PUT | `/api/parts/:id/stock` | Actualizar stock | Sí |
| DELETE | `/api/parts/:id` | Eliminar repuesto | Sí |
**Ejemplo - Registrar Repuesto:**
```json
POST /api/parts
Authorization: Bearer {token}
Content-Type: application/json

{
  "code": "REP123",
  "name": "Filtro de aceite",
  "category": "Motor",
  "brand": "Bosch",
  "stock": 20,
  "priceBuy": 10,
  "priceSell": 15
}
```

**Ejemplo - Respuesta:**
```json
{
  "success": true,
  "part": {
    "id": 1,
    "code": "REP123",
    "name": "Filtro de aceite"
  }
}
```

#### 6.2.8 Citas (Appointments)

![Endpoints Citas](./docs/backend/citas.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| GET | `/api/appointments` | Listar todas las citas | Sí |
| GET | `/api/appointments/:id` | Obtener cita por ID | Sí |
| GET | `/api/appointments/date/:date` | Citas por fecha | Sí |
| GET | `/api/appointments/mechanic/:mechanicId` | Citas por mecánico | Sí |
| POST | `/api/appointments` | Crear nueva cita | Sí |
| PUT | `/api/appointments/:id` | Actualizar cita | Sí |
| PUT | `/api/appointments/:id/cancel` | Cancelar cita | Sí |
| DELETE | `/api/appointments/:id` | Eliminar cita | Sí |
**Ejemplo - Crear Cita:**
```json
POST /api/appointments
Authorization: Bearer {token}
Content-Type: application/json

{
  "clientId": 1,
  "vehicleId": 1,
  "serviceId": 1,
  "mechanicId": 1,
  "date": "2025-11-20T10:00:00",
  "duration": 2,
  "priority": "Alta"
}
```

**Ejemplo - Respuesta:**
```json
{
  "success": true,
  "appointment": {
    "id": 1,
    "date": "2025-11-20T10:00:00",
    "clientId": 1
  }
}
```

#### 6.2.9 Órdenes de Trabajo (Work Orders)

![Endpoints Órdenes](./docs/backend/ordendetrabajo.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| GET | `/api/work-orders` | Listar todas las órdenes | Sí |
| GET | `/api/work-orders/:id` | Obtener orden por ID | Sí |
| GET | `/api/work-orders/status/:status` | Órdenes por estado | Sí |
| GET | `/api/work-orders/vehicle/:vehicleId` | Órdenes por vehículo | Sí |
| POST | `/api/work-orders` | Crear nueva orden | Sí |
| PUT | `/api/work-orders/:id` | Actualizar orden | Sí |
| PUT | `/api/work-orders/:id/status` | Cambiar estado | Sí |
| DELETE | `/api/work-orders/:id` | Eliminar orden | Sí |

**Ejemplo - Crear Orden de Trabajo:**
```json
POST /api/work-orders
Authorization: Bearer {token}
Content-Type: application/json

{
  "vehicleId": 1,
  "mechanicId": 2,
  "clientId": 1,
  "currentMileage": 50000,
  "estimatedDeliveryDate": "2025-11-20",
  "diagnosis": "Cambio de aceite y revisión general",
  "services": [
    { "serviceId": 1, "quantity": 1, "price": 50.00 }
  ],
  "parts": [
    { "partId": 5, "quantity": 4, "price": 10.00 }
  ],
  "observations": "Cliente reporta ruido en el motor"
}
```

#### 6.2.10 Pagos (Payments)

![Endpoints Pagos](./docs/backend/pagos.png)

| Método | Endpoint | Descripción | Requiere Auth |
|--------|----------|-------------|---------------|
| GET | `/api/payments` | Listar todos los pagos | Sí |
| GET | `/api/payments/:id` | Obtener pago por ID | Sí |
| GET | `/api/payments/work-order/:workOrderId` | Pagos por orden | Sí |
| GET | `/api/payments/report` | Reporte de ingresos | Sí |
| POST | `/api/payments` | Registrar nuevo pago | Sí |
| PUT | `/api/payments/:id` | Actualizar pago | Sí |
| DELETE | `/api/payments/:id` | Eliminar pago | Sí |
**Ejemplo - Registrar Pago:**
```json
POST /api/payments
Authorization: Bearer {token}
Content-Type: application/json

{
  "workOrderId": 1,
  "amount": 100,
  "method": "Efectivo",
  "date": "2025-11-20T12:00:00",
  "reference": "REF123456"
}
```

**Ejemplo - Respuesta:**
```json
{
  "success": true,
  "payment": {
    "id": 1,
    "workOrderId": 1,
    "amount": 100
  }
}
```




#### 6.3.2 Roles y Permisos

![Roles de Usuario](./docs/backend/roles.png)

| Rol | Permisos |
|-----|----------|
| **Admin** | Acceso completo a todas las funcionalidades |
| **Manager** | Gestión de órdenes, citas, clientes y reportes |
| **Mechanic** | Consulta y actualización de órdenes asignadas |
| **Receptionist** | Gestión de citas y clientes |
| **Accountant** | Gestión de pagos y reportes financieros |

#### 6.3.3 Middleware de Autenticación

Todas las rutas protegidas requieren:
1. Token JWT válido en el header
2. Token no expirado
3. Usuario activo en el sistema
4. Permisos adecuados para la operación

**Ejemplo de uso:**
```javascript
// Header requerido en cada petición
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### 6.3.4 Seguridad de Contraseñas

- Encriptación con **Bcrypt**
- Salt rounds: 10
- No se almacenan contraseñas en texto plano
- Sistema de recuperación por email

### 6.4 Base de Datos

#### 6.4.1 Modelo de Datos

![Diagrama ER](./docs/backend/mecatronix2.png)

**Tablas principales:**

1. **users** - Usuarios del sistema
2. **roles** - Roles y permisos
3. **clients** - Clientes del taller
4. **vehicles** - Vehículos registrados
5. **insurance** - Pólizas de seguro
6. **mechanics** - Mecánicos del taller
7. **services** - Catálogo de servicios
8. **parts** - Inventario de repuestos
9. **appointments** - Citas programadas
10. **work_orders** - Órdenes de trabajo
11. **work_order_services** - Servicios en órdenes
12. **work_order_parts** - Repuestos en órdenes
13. **payments** - Pagos registrados
14. **refresh_tokens** - Tokens de sesión
15. **password_reset_tokens** - Tokens de recuperación

#### 6.4.2 Relaciones

```
Client 1:N Vehicle
Vehicle 1:N Insurance
Vehicle 1:N Appointment
Vehicle 1:N WorkOrder
Mechanic 1:N Appointment
Mechanic 1:N WorkOrder
WorkOrder 1:N WorkOrderService
WorkOrder 1:N WorkOrderPart
WorkOrder 1:N Payment
Service N:M WorkOrder (through WorkOrderService)
Part N:M WorkOrder (through WorkOrderPart)
User 1:1 Client (opcional)
User N:M Role (through UserRole)
```

#### 6.4.3 Configuración de Base de Datos

![Configuración DB](./docs/backend/env.png)

**Archivo `.env`:**
```env
# Tipo de base de datos
DB_TYPE=mysql  # mysql, postgres, mssql, oracle

# MySQL / PostgreSQL
DB_HOST=localhost
DB_PORT=3306
DB_NAME=mecanixpro
DB_USER=root
DB_PASSWORD=password

# SQL Server
MSSQL_SERVER=localhost
MSSQL_PORT=1433
MSSQL_DATABASE=mecanixpro
MSSQL_USER=sa
MSSQL_PASSWORD=password

# Oracle
ORACLE_HOST=localhost
ORACLE_PORT=1521
ORACLE_SERVICE=XEPDB1
ORACLE_USER=system
ORACLE_PASSWORD=password

# JWT
JWT_SECRET=your-secret-key-here
JWT_REFRESH_SECRET=your-refresh-secret-key-here

# Email (opcional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

#### 6.4.4 Migraciones y Seeds

**Inicializar base de datos:**
```bash
cd backend
npm run seed:roles
npm run seed
```

Esto creará:
- Estructura de tablas
- Roles predeterminados
- Usuario administrador
- Datos de prueba (opcional)
