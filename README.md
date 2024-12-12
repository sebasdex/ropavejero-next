## Next.js Proyecto E-commerce 
Este es un proyecto de práctica desarrollado para mejorar habilidades en Next.js, TypeScript y el manejo del estado con Zustand. También se utilizaron Material UI y Tailwind CSS para estilizar la interfaz.  

El proyecto consiste en un prototipo de e-commerce (carrito de compras) basado en el diseño de la página Urban Tee. Aunque no se implementó un backend ni base de datos, las funcionalidades del cliente permiten experimentar con el flujo principal de un carrito de compras.

## Características
- **Framework:** Next.js
- **Lenguaje:** TypeScript
- **Gestión de estado:** Zustand
- **Estilización:** Material UI, Tailwind CSS
- **Imágenes generadas por IA:** Las imágenes utilizadas en el proyecto fueron generadas mediante modelos de inteligencia artificial y se encuentran dentro del repositorio.
- **Diseño responsivo inspirado en:** [Urban Tee](https://theme528-t-shirt.myshopify.com/).

## Instalación y Uso
Clonar el repositorio
```
git clone https://github.com/sebasdex/ropavejero-next
cd ropavejero-next
```
Instalar dependencias
```
pnpm install
```
Iniciar el proyecto
```
pnpm run dev
```
Abre http://localhost:3000 en tu navegador para ver el proyecto.

## Estructura del proyecto
```
📦 src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   ├── categories/
│   │   ├── color/
│   │   │   └── page.tsx
│   │   ├── funny/
│   │   │   └── page.tsx
│   │   ├── images/
│   │   │   └── page.tsx
│   │   ├── logo/
│   │   │   └── page.tsx
│   │   ├── men/
│   │   │   └── page.tsx
│   │   ├── phrase/
│   │   │   └── page.tsx
│   │   ├── teens/
│   │   │   └── page.tsx
│   │   ├── unique/
│   │   │   └── page.tsx
│   │   ├── women/
│   │   │   └── page.tsx
│   ├── collection/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── globals.css
|   └── page.tsx 
├── components/
│   ├── cart/
│   │   ├── ButtonsCart.tsx
│   │   └── TableCart.tsx
│   ├── categories/
│   │   ├── ColorElements.tsx
│   │   └── NewCollections.tsx
│   ├── clothes-details/
│   │   ├── InfoClothes.tsx
│   │   └── SocialMediaInfo.tsx
│   ├── contact/
│   │   ├── Form.tsx
│   │   ├── InfoContact.tsx
│   │   └── SocialMedia.tsx
│   ├── menu-logo/
│   │   └── HamburgerMenu.tsx
│   ├── ui/
│   │   ├── ArrowUp.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── BreadcrumbsCart.tsx
│   ├── AddMessageCart.tsx
│   ├── Banner.tsx
│   ├── BannerCategory.tsx
│   ├── CartSection.tsx
│   ├── CatalogMenu.tsx
│   ├── Categories.tsx
│   ├── CollectionMain.tsx
│   ├── CollectionMenu.tsx
│   ├── Footer.tsx
│   ├── MenuCategories.tsx
│   ├── MenuLogo.tsx
│   ├── Menubar.tsx
│   ├── Offer.tsx
│   ├── PopularShirts.tsx
│   ├── SubMenuBar.tsx
│   ├── Title.tsx
│   └── Trend.tsx
├── db/
│   └── db.ts
├── store/
│   └── myState.ts
├── .eslintrc.json
├── .gitignore
├── README.md
├── next.config.mjs
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
## Funcionalidades implementadas

- Catálogo de productos.
- Sistema de carrito de compras.
- Actualización del estado del carrito con Zustand.
- Interfaz estilizada con Material UI y Tailwind CSS.

## Mejoras futuras

1. Integración con backend:
    - Implementar una API o conectarse a un servicio de base de datos.

2. Optimización de imágenes:
    - Usar herramientas en la nube para almacenar y servir imágenes.

3. Autenticación de usuarios:
    - Añadir un sistema de login y perfiles.

4. Mejoras en la UI:
    - Animaciones y transiciones más dinámicas.

## Inspiración y créditos
Este proyecto se inspiró en el diseño de la página [Urban Tee](https://theme528-t-shirt.myshopify.com/).  
Las imágenes fueron generadas con modelos de inteligencia artificial.
## 
Proyecto de práctica
