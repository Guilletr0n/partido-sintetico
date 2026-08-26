# ☁️ Guía de Despliegue en Cloudflare Pages

Esta guía detalla paso a paso cómo compilar y desplegar las aplicaciones del monorepo (**CMS** y **Design System Showcase**) en **Cloudflare Pages** desde la terminal usando la herramienta oficial **Wrangler** (`bunx wrangler`).

---

## 📋 Índice

1. [Requisitos Previos](#1-requisitos-previos)
2. [Opciones de Autenticación](#2-opciones-de-autenticación)
   - [Opción A: Login Interactivo en Navegador (Recomendado para humanos)](#opción-a-login-interactivo-en-navegador-recomendado)
   - [Opción B: Variables de Entorno con API Token (Para CI/CD o terminal headless)](#opción-b-variables-de-entorno-con-api-token)
3. [Compilación Previa (Pre-flight Build)](#3-compilación-previa-pre-flight-build)
4. [Despliegue de Aplicaciones](#4-despliegue-de-aplicaciones)
   - [A. Desplegar el CMS (`apps/cms`)](#a-desplegar-el-cms-appscms)
   - [B. Desplegar el Showcase del Sistema de Diseño (`apps/design-system-docs`)](#b-desplegar-el-showcase-del-sistema-de-diseño-appsdesign-system-docs)
5. [Despliegues de Previsualización (Preview / Staging)](#5-despliegues-de-previsualización-preview--staging)
6. [Prueba Local con el Entorno de Cloudflare (`wrangler pages dev`)](#6-prueba-local-con-el-entorno-de-cloudflare)
7. [Configuración de Dominio Personalizado](#7-configuración-de-dominio-personalizado)
8. [Resolución de Problemas Frecuentes](#8-resolución-de-problemas-frecuentes)

---

## 1. Requisitos Previos

- Tener una cuenta activa en [Cloudflare](https://dash.cloudflare.com/sign-up).
- Tener instalado **[Bun](https://bun.sh)** (`bun --version`).
- Haber instalado las dependencias del proyecto desde la raíz del monorepo:
  ```bash
  bun install
  ```

---

## 2. Opciones de Autenticación

### Opción A: Login Interactivo en Navegador (Recomendado)

Si estás trabajando en tu ordenador local, la forma más rápida y sencilla es iniciar sesión directamente con Wrangler:

```bash
bunx wrangler login
```

1. Wrangler abrirá automáticamente una pestaña en tu navegador.
2. Haz clic en **Allow / Autorizar** para conceder permisos a Wrangler.
3. Vuelve a la terminal; verás un mensaje de confirmación: `Successfully logged in.`.

---

### Opción B: Variables de Entorno con API Token

Si prefieres usar un token API o estás en un entorno automatizado (como GitHub Actions):

1. Ve a **Cloudflare Dashboard** → **My Profile** → **API Tokens** → [Create Token](https://dash.cloudflare.com/profile/api-tokens).
2. Usa la plantilla **Cloudflare Pages** (o crea un token con permisos `Cloudflare Pages: Edit` y `Account: Read`).
3. Obtén tu **Account ID** desde la barra lateral de cualquier dominio o proyecto en Cloudflare.
4. Crea un archivo `.env` en la raíz del monorepo (asegúrate de que esté en `.gitignore`):

```ini
# .env (en la raíz del proyecto)
CLOUDFLARE_ACCOUNT_ID="tu_account_id_aqui"
CLOUDFLARE_API_TOKEN="tu_api_token_aqui"
CLOUDFLARE_PAGES_CMS_PROJECT="partido-sintetico-cms"
CLOUDFLARE_PAGES_DOCS_PROJECT="partido-sintetico-docs"
```

5. Carga las variables antes de ejecutar comandos:
```bash
export $(grep -v '^#' .env | xargs)
```

---

## 3. Compilación Previa (Pre-flight Build)

Antes de desplegar, genera los artefactos de producción y valida los tipos de TypeScript:

```bash
# 1. Comprobar tipos en todo el monorepo
bun run check

# 2. Compilar todas las aplicaciones y paquetes
bun run build
```

Esto generará las carpetas estáticas:
- `apps/cms/dist/`
- `apps/design-system-docs/dist/`

---

## 4. Despliegue de Aplicaciones

### A. Desplegar el CMS (`apps/cms`)

#### Paso 1: Crear el proyecto en Cloudflare Pages (solo la primera vez)

```bash
bunx wrangler pages project create partido-sintetico-cms --production-branch main
```

#### Paso 2: Desplegar la carpeta `dist` a producción

```bash
bunx wrangler pages deploy apps/cms/dist --project-name=partido-sintetico-cms --branch=main
```

> **Resultado**: Wrangler subirá los archivos y te devolverá una URL única de despliegue y la URL de producción (por ejemplo: `https://partido-sintetico-cms.pages.dev`).

---

### B. Desplegar el Showcase del Sistema de Diseño (`apps/design-system-docs`)

#### Paso 1: Crear el proyecto en Cloudflare Pages (solo la primera vez)

```bash
bunx wrangler pages project create partido-sintetico-docs --production-branch main
```

#### Paso 2: Desplegar la carpeta `dist` a producción

```bash
bunx wrangler pages deploy apps/design-system-docs/dist --project-name=partido-sintetico-docs --branch=main
```

> **Resultado**: Tendrás el showcase accesible en su propia URL (por ejemplo: `https://partido-sintetico-docs.pages.dev`).

---

## 5. Despliegues de Previsualización (Preview / Staging)

Si quieres probar cambios en una URL temporal sin alterar la versión principal de producción, especifica una rama distinta a `main` (por ejemplo `preview` o `feature-x`):

```bash
# Despliegue de previsualización del CMS
bunx wrangler pages deploy apps/cms/dist --project-name=partido-sintetico-cms --branch=preview
```

Cloudflare generará un enlace aislado del tipo:
`https://<hash>.partido-sintetico-cms.pages.dev`

---

## 6. Prueba Local con el Entorno de Cloudflare

Para comprobar cómo servirá Cloudflare los encabezados, rutas estáticas y assets antes de subir nada:

```bash
# Emular Cloudflare Pages localmente en el puerto 8788
bunx wrangler pages dev apps/cms/dist --port 8788
```

Abre en tu navegador: `http://localhost:8788`.

---

## 7. Configuración de Dominio Personalizado

Para vincular tu propio dominio (ej. `partidosintetico.es` o `docs.partidosintetico.es`):

1. Accede a **Cloudflare Dashboard** → **Workers & Pages**.
2. Selecciona tu proyecto (`partido-sintetico-cms` o `partido-sintetico-docs`).
3. Ve a la pestaña **Custom Domains** (Dominios personalizados).
4. Haz clic en **Set up a domain** e introduce tu dominio o subdominio.
5. Cloudflare configurará automáticamente los registros DNS y el certificado SSL/TLS gratuito.

---

## 8. Resolución de Problemas Frecuentes

### ❌ Error de autenticación (`Authentication error [code: 10000]`)
- **Causa**: El token API ha expirado, tiene permisos insuficientes o la sesión local caducó.
- **Solución**: Vuelve a ejecutar `bunx wrangler login` o regenera tu token en el panel de Cloudflare con permisos de `Cloudflare Pages: Edit`.

### ❌ Error: `Project not found`
- **Causa**: El proyecto no ha sido creado aún en tu cuenta.
- **Solución**: Ejecuta `bunx wrangler pages project create <nombre-proyecto> --production-branch main` antes del primer deploy.

### ❌ La página muestra contenido desactualizado o estilos rotos
- **Causa**: No se recompiló el proyecto antes de desplegar.
- **Solución**: Asegúrate de ejecutar `bun run build` para actualizar la carpeta `dist/` antes de lanzar `bunx wrangler pages deploy`.

---

## ⚡ Resumen Rápido de Comandos (Cheat Sheet)

```bash
# Iniciar sesión
bunx wrangler login

# Compilar proyecto
bun run build

# Desplegar CMS a Producción
bunx wrangler pages deploy apps/cms/dist --project-name=partido-sintetico-cms --branch=main

# Desplegar Showcase a Producción
bunx wrangler pages deploy apps/design-system-docs/dist --project-name=partido-sintetico-docs --branch=main
```
