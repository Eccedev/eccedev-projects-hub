# Eccedev Projects Hub - PWA
![hub](https://github.com/user-attachments/assets/117d3510-8792-402e-b101-6128a9907b73)

Un hub centralizado y dinámico diseñado para mostrar una colección de juegos y proyectos Web2/Web3. Esta aplicación ha sido construida como una **Progressive Web App (PWA)**, ofreciendo una experiencia de usuario fluida, instalable y con capacidades offline.

## 🚀 Características Principales

- **🎩 PWA Full Implementation**: Incluye Service Worker y Web Manifest para permitir la instalación en dispositivos móviles y escritorio, con acceso rápido desde la pantalla de inicio.
- **📱 Responsive Design**: Interfaz adaptable a cualquier tamaño de pantalla (Mobile/Tablet/Desktop) utilizando Flexbox y CSS moderno.
- **🎮 Catálogo Dinámico**: Filtrado en tiempo real de juegos y proyectos mediante JavaScript vanila.
- **🎲 Generador Aleatorio**: Función para recomendar un juego al azar de la colección.
- **🔞 Filtro de Contenido**: Sección dedicada para proyectos +18 con gestión de visibilidad dinámica.
- **⚡ Rendimiento Optimizado**: Estrategia de caché *Stale-While-Revalidate* para cargas instantáneas.

## 🛠️ Stack Tecnológico

- **HTML5**: Estructura semántica completa.
- **CSS3**: Diseño personalizado (Vanilla CSS) con variables, efectos de hover avanzados y transiciones suaves.
- **JavaScript (ES6+)**: Lógica de renderizado, filtrado de datos y gestión de eventos del DOM.
- **Service Workers**: Gestión de ciclo de vida de la aplicación y almacenamiento en caché de activos (CORS-friendly).

## 📂 Estructura Técnica de Componentes

### 💳 Tarjetas de Proyecto (Cards)
Las tarjetas están implementadas como elementos interactivos que encapsulan metadatos del proyecto:
- **Interactividad**: Toda la tarjeta es clicable (`event.target`), redirigiendo al usuario a la URL del proyecto.
- **Prevención de Propagación**: El botón interno "Ver" gestiona `stopPropagation()` para evitar conflictos de eventos entre el botón y el contenedor padre.
- **Estética**: Elevación mediante `box-shadow` y transiciones en el eje Y al hacer hover.

### 🌐 Web Manifest & SEO
Localizado en `assets/favicon/site.webmanifest`, define la identidad visual de la app:
- **Iconos**: Asset management para múltiples resoluciones (192px, 512px).
- **Standalone Mode**: Configuración para eliminar la UI del navegador y maximizar el área de visualización.

### ⚙️ Service Worker (`sw.js`)
El "corazón" de la persistencia:
- **Instalación**: Pre-cacheo de archivos críticos (`index.html`, `styles.css`, `script.js`).
- **Activación**: Limpieza automática de versiones antiguas de caché para asegurar que el usuario siempre tenga la versión más reciente.
- **Caché Estratégico**: Interceptación de peticiones de red para servir contenido desde el almacenamiento local cuando el servidor no está disponible.

# link
Puedes visitar el preview de este theme [Hub de Juegos y Proyectos](https://juegosyproyectos.vercel.app/)
# autor 
[By Eccedev](https://github.com/Eccedev)
