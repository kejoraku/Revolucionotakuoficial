# Revolución Otaku Oficial

Una página web responsiva similar a Crunchyroll para la comunidad otaku, con carruseles automáticos y diseño moderno.

## 🚀 Características

- **SPA (Single Page Application)** con React Router
- **Carruseles automáticos** que cambian cada 5 segundos
- **Diseño responsivo** que se adapta a todos los dispositivos
- **Navegación moderna** con menú hamburguesa para móviles
- **Tres secciones principales**: Inicio, Eventos y Torneos
- **Diseño inspirado en Crunchyroll** con colores y estilos modernos
- **Animaciones suaves** y transiciones elegantes

## 📱 Secciones

### 🏠 Inicio
- Carrusel principal con 5 imágenes de contenido destacado
- Sección de contenido destacado con tarjetas interactivas
- Información sobre nuevas temporadas, manga y gaming

### 🎉 Eventos
- Carrusel de próximos eventos
- Calendario de eventos con fechas y ubicaciones
- Información detallada de cada evento

### 🏆 Torneos
- Carrusel de torneos de gaming
- Lista de torneos activos con premios
- Estados de inscripción y fechas importantes

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **React Router** - Navegación entre páginas
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos modernos con gradientes y animaciones
- **Responsive Design** - Adaptable a móviles, tablets y desktop

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd revolucion-otaku-oficial
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - Ve a `http://localhost:3000`
   - La aplicación se abrirá automáticamente

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx          # Componente de navegación
│   ├── Navbar.css
│   ├── Carousel.jsx        # Componente de carrusel reutilizable
│   └── Carousel.css
├── pages/
│   ├── Home.jsx            # Página de inicio
│   ├── Home.css
│   ├── Eventos.jsx         # Página de eventos
│   ├── Eventos.css
│   ├── Torneos.jsx         # Página de torneos
│   └── Torneos.css
├── App.jsx                 # Componente principal
├── App.css
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales
```

## 🎨 Características del Diseño

- **Paleta de colores**: Naranja (#ff6b35) y gradientes oscuros
- **Tipografía**: Inter (Google Fonts)
- **Efectos visuales**: Backdrop blur, sombras y transiciones
- **Responsive**: Breakpoints en 768px y 480px
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 🔧 Personalización

### Cambiar imágenes del carrusel
Edita los arrays de imágenes en cada página:
- `src/pages/Home.jsx` - Imágenes de la página de inicio
- `src/pages/Eventos.jsx` - Imágenes de eventos
- `src/pages/Torneos.jsx` - Imágenes de torneos

### Modificar colores
Los colores principales están definidos en:
- `src/index.css` - Variables globales
- `src/components/Navbar.css` - Colores de navegación
- `src/components/Carousel.css` - Colores del carrusel

### Ajustar intervalos del carrusel
Modifica la prop `autoPlayInterval` en los componentes Carousel:
```jsx
<Carousel 
  images={images} 
  title="Título" 
  autoPlayInterval={5000} // 5 segundos
/>
```

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles
- ✅ Tablets

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Vite
3. Configuración automática:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. El deployment se realizará automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Solución de Problemas en Vercel
Si encuentras el error "Command 'npm run build' exited with 126":
1. Asegúrate de que el archivo `vercel.json` esté presente
2. Verifica que las dependencias estén actualizadas
3. Revisa que el Node.js version sea compatible (recomendado: 18.x o superior)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Proyecto**: Revolución Otaku Oficial
- **Descripción**: Página web para la comunidad otaku
- **Tecnologías**: React, Vite, CSS3

---

¡Disfruta explorando el mundo otaku! 🎌✨


