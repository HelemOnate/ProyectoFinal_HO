<div align="center">
  <img src="frontend/public/assets/images/mecanixpro-logo.svg" alt="MecanixPro Logo" width="150" height="150">
  
  # 🚗 MecanixPro
  
  **Sistema integral de gestión para talleres automotrices**
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
  
  Gestiona clientes, vehículos, servicios, citas, órdenes de trabajo, inventario de repuestos, mecánicos, seguros y pagos de manera eficiente y profesional.
  
</div>

---

## 📋 Características Principales

### Módulos del Sistema
- **👥 Gestión de Clientes**: Registro completo de clientes con historial de servicios
- **🚙 Gestión de Vehículos**: Control de vehículos asociados a clientes
- **⚙️ Servicios**: Catálogo de servicios con precios, duración y categorías
- **📅 Citas**: Sistema de programación de citas con mecánicos asignados
- **🔧 Órdenes de Trabajo**: Control completo del proceso de reparación
- **📦 Inventario de Repuestos**: Gestión de partes y stock
- **👨‍🔧 Mecánicos**: Administración de personal técnico y especialidades
- **🛡️ Seguros**: Gestión de compañías de seguros y pólizas
- **💳 Pagos**: Control de transacciones y métodos de pago
- **👤 Usuarios**: Sistema de autenticación con roles (Admin, Mecánico, Recepcionista)

### Tecnologías Utilizadas

#### Backend
- **Node.js** + **TypeScript**
- **Express**: Framework web
- **Sequelize**: ORM para base de datos
- Soporte para múltiples bases de datos:
  - MySQL
  - PostgreSQL
  - SQL Server
  - Oracle
- **JWT**: Autenticación y autorización
- **Bcrypt**: Encriptación de contraseñas

#### Frontend
- **Angular 20** con standalone components
- **PrimeNG 20**: Biblioteca de componentes UI
- **TypeScript**
- Sistema de enrutamiento modular
- Interceptores HTTP para logging y autenticación
- Sistema de modales reutilizables

## � Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (incluido con Node.js) o **yarn**
- **Git** - [Descargar aquí](https://git-scm.com/)
- **Base de datos** (elige una):
  - MySQL (recomendado)
  - PostgreSQL
  - SQL Server
  - Oracle

## 🚀 Guía de Instalación Completa

### Paso 1: Clonar el Repositorio

Abre tu terminal y ejecuta:

```bash
# Clonar el repositorio
git clone https://github.com/HelemOnate/ProyectoFinal_HO.git

# Entrar al directorio del proyecto
cd ProyectoFinal_HO
```

### Paso 2: Configurar la Base de Datos

1. **Crear la base de datos:**

   **Para MySQL:**
   ```sql
   CREATE DATABASE mecanixpro CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

   **Para PostgreSQL:**
   ```sql
   CREATE DATABASE mecanixpro WITH ENCODING 'UTF8';
   ```

2. **Crear un usuario con permisos (opcional pero recomendado):**
   ```sql
   -- MySQL
   CREATE USER 'mecanixpro_user'@'localhost' IDENTIFIED BY 'tu_password_seguro';
   GRANT ALL PRIVILEGES ON mecanixpro.* TO 'mecanixpro_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

### Paso 3: Configurar el Backend

1. **Navegar a la carpeta del backend:**
   ```bash
   cd backend
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Crear y configurar el archivo `.env`:**
   
   Crea un archivo llamado `.env` en la carpeta `backend/` con el siguiente contenido:

   ```env
   # Puerto del servidor
   PORT=3001

   # Configuración de Base de Datos
   DB_DIALECT=mysql                    # mysql, postgres, mssql, u oracle
   DB_HOST=localhost
   DB_PORT=3306                        # 3306 para MySQL, 5432 para PostgreSQL
   DB_NAME=mecanixpro
   DB_USER=root                        # o el usuario que creaste
   DB_PASSWORD=tu_password             # tu contraseña de la BD

   # JWT - Secretos para autenticación (cambiar en producción)
   JWT_SECRET=mecanixpro_super_secret_jwt_key_2024
   JWT_REFRESH_SECRET=mecanixpro_refresh_secret_key_2024

   # Configuración de correo electrónico (opcional - para recuperación de contraseña)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=tu_email@gmail.com
   EMAIL_PASSWORD=tu_password_de_aplicacion
   EMAIL_FROM=noreply@mecanixpro.com
   ```

   > ⚠️ **Importante:** Cambia `tu_password` por tu contraseña real de la base de datos.

4. **Iniciar el servidor backend:**
   ```bash
   npm run dev
   ```

   Deberías ver un mensaje como:
   ```
   ✓ Servidor corriendo en el puerto 3001
   ✓ Base de datos conectada exitosamente
   ```

   > El backend estará disponible en **`http://localhost:3001`**

### Paso 4: Configurar el Frontend

1. **Abrir una nueva terminal** (mantén el backend corriendo) y navegar a la carpeta frontend:
   ```bash
   # Desde la raíz del proyecto
   cd frontend
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Verificar la configuración del proxy:**
   
   El archivo `proxy.conf.json` ya está configurado para conectar con el backend:
   ```json
   {
     "/api": {
       "target": "http://localhost:3001",
       "secure": false,
       "changeOrigin": true
     }
   }
   ```

4. **Iniciar la aplicación Angular:**
   ```bash
   ng serve
   ```

   O si `ng` no está instalado globalmente:
   ```bash
   npm start
   ```

   Deberías ver:
   ```
   ✔ Browser application bundle generation complete.
   ** Angular Live Development Server is listening on localhost:4200 **
   ```

   > El frontend estará disponible en **`http://localhost:4200`**

### Paso 5: Acceder al Sistema

1. **Abre tu navegador web** y visita: `http://localhost:4200`

2. **Inicia sesión con uno de los usuarios por defecto:**

   | Usuario | Contraseña | Rol |
   |---------|-----------|-----|
   | admin@mecanixpro.com | admin123 | Administrador |
   | mecanico@mecanixpro.com | mecanico123 | Mecánico |
   | recepcion@mecanixpro.com | recepcion123 | Recepcionista |

3. ¡Listo! Ya puedes comenzar a usar MecanixPro 🎉

## 🔄 Resumen de Comandos Rápidos

```bash
# 1. Clonar el proyecto
git clone https://github.com/HelemOnate/ProyectoFinal_HO.git
cd ProyectoFinal_HO

# 2. Backend (Terminal 1)
cd backend
npm install
# Crear archivo .env con la configuración
npm run dev

# 3. Frontend (Terminal 2 - nueva terminal)
cd frontend
npm install
ng serve

# 4. Abrir navegador en http://localhost:4200
```

## 📁 Estructura del Proyecto

```
MecanixPro/
├── backend/
│   ├── src/
│   │   ├── config/          # Configuración de BD y otros
│   │   ├── controllers/     # Controladores de rutas
│   │   ├── middleware/      # Middlewares de autenticación
│   │   ├── models/          # Modelos de Sequelize
│   │   ├── routes/          # Definición de rutas
│   │   ├── services/        # Lógica de negocio
│   │   ├── utils/           # Utilidades
│   │   └── index.ts         # Punto de entrada
│   ├── .env                 # Variables de entorno
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/        # Servicios, guards, interceptores
│   │   │   ├── features/    # Módulos funcionales
│   │   │   ├── shared/      # Componentes y modelos compartidos
│   │   │   └── styles/      # Estilos globales
│   │   ├── assets/          # Recursos estáticos
│   │   └── index.html
│   ├── proxy.conf.json      # Configuración de proxy
│   └── package.json
│
├── docs/                    # Documentación adicional
├── MANUAL_DE_USUARIO.md     # Manual de usuario del sistema
├── SYSTEM_DOCUMENTATION.md  # Documentación técnica
└── README.md                # Este archivo
```

## 🔐 Usuarios por Defecto

El sistema crea automáticamente usuarios de prueba al iniciar:

| Usuario | Contraseña | Rol |
|---------|-----------|-----|
| admin@mecanixpro.com | admin123 | Administrador |
| mecanico@mecanixpro.com | mecanico123 | Mecánico |
| recepcion@mecanixpro.com | recepcion123 | Recepcionista |

## 📖 Documentación Adicional

- **[Manual de Usuario](MANUAL_DE_USUARIO.md)**: Guía completa para usuarios finales
- **[Documentación del Sistema](SYSTEM_DOCUMENTATION.md)**: Documentación técnica detallada
- **[Backend README](backend/README.md)**: Detalles del backend
- **[Frontend README](frontend/README.md)**: Detalles del frontend

## 🛠️ Scripts de Desarrollo

### Backend
```bash
npm run dev           # Modo desarrollo con hot-reload (nodemon)
npm run build         # Compilar TypeScript a JavaScript
npm start             # Ejecutar versión compilada (producción)
npm run seed          # Poblar la base de datos con datos de prueba
```

### Frontend
```bash
ng serve              # Servidor de desarrollo (http://localhost:4200)
ng serve --open       # Abrir automáticamente en el navegador
ng build              # Build de producción (carpeta dist/)
ng build --prod       # Build optimizado para producción
ng test               # Ejecutar tests unitarios
ng lint               # Ejecutar linter (verificar código)
ng generate component <nombre>  # Crear nuevo componente
```

## 🐛 Solución de Problemas Comunes

### Error: "Cannot connect to database"
- Verifica que la base de datos esté corriendo
- Revisa las credenciales en el archivo `.env`
- Asegúrate de que la base de datos `mecanixpro` existe

### Error: "Port 3001 already in use"
- Hay otro proceso usando el puerto 3001
- Cambia el puerto en el archivo `.env` del backend
- O detén el proceso: `lsof -ti:3001 | xargs kill -9` (Linux/Mac)

### Error: "ng: command not found"
- Angular CLI no está instalado globalmente
- Instala con: `npm install -g @angular/cli`
- O usa: `npx ng serve` en lugar de `ng serve`

### Error al instalar dependencias
```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### El frontend no se conecta al backend
- Verifica que el backend esté corriendo en el puerto 3001
- Revisa el archivo `proxy.conf.json`
- Limpia caché del navegador (Ctrl + Shift + R)

## 🎯 Características Destacadas

### 🎨 Interfaz Moderna
- Diseño responsive que se adapta a cualquier dispositivo
- Animaciones suaves y transiciones fluidas
- Tema profesional con paleta de colores consistente
- Componentes reutilizables con PrimeNG

### 🔒 Seguridad
- Autenticación JWT con tokens de acceso y refresh
- Encriptación de contraseñas con Bcrypt
- Sistema de roles y permisos
- Protección de rutas mediante guards
- Recuperación de contraseña por email

### 📊 Reportes y Análisis
- Dashboard con métricas en tiempo real
- Historial completo de servicios
- Control de inventario
- Seguimiento de pagos y facturación

### 🚀 Rendimiento
- Lazy loading de módulos
- Optimización de imágenes y assets
- Cache de datos frecuentes
- Paginación eficiente

## 🤝 Contribución

Las contribuciones son bienvenidas. Si deseas colaborar:

1. **Fork** el proyecto
2. Crea una rama para tu feature:
   ```bash
   git checkout -b feature/NuevaCaracteristica
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m 'feat: Agregar nueva característica'
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/NuevaCaracteristica
   ```
5. Abre un **Pull Request** describiendo los cambios

### Convenciones de Commits
Usamos [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan el código)
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Tareas de mantenimiento

## 📝 Licencia

Este proyecto es parte de un proyecto académico desarrollado para fines educativos.

## 👥 Autores

- **Equipo MecanixPro** - Desarrollo y diseño del sistema

## 🐛 Reporte de Bugs

Si encuentras algún error o problema:
1. Revisa si ya existe un [issue](https://github.com/HelemOnate/ProyectoFinal_HO/issues) similar
2. Si no existe, crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Comportamiento esperado vs actual
   - Capturas de pantalla (si aplica)
   - Información del entorno (SO, navegador, versión de Node.js)

## 📞 Soporte y Contacto

- 📧 Email: soporte@mecanixpro.com
- 📖 [Documentación Completa](MANUAL_DE_USUARIO.md)
- 🔧 [Documentación Técnica](SYSTEM_DOCUMENTATION.md)
- 💻 [Repositorio GitHub](https://github.com/HelemOnate/ProyectoFinal_HO)

## ⭐ ¿Te gusta el proyecto?

Si este proyecto te ha sido útil, considera darle una estrella ⭐ en GitHub.

---

<div align="center">
  Hecho con ❤️ por el equipo de MecanixPro
  
  © 2025 MecanixPro - Todos los derechos reservados
</div>
