// SEO Performance Optimization - Mejoras técnicas sin afectar contenido visual
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Lazy loading para imágenes (mejora velocidad de carga)
    function addLazyLoading() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            // Agregar dimensiones para evitar layout shift
            if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
                img.addEventListener('load', function() {
                    this.setAttribute('width', this.naturalWidth);
                    this.setAttribute('height', this.naturalHeight);
                });
            }
        });
    }

    // 2. Preload de recursos críticos
    function addPreloadHints() {
        const preloads = [
            { href: 'styles.css', as: 'style' },
            { href: 'script.js', as: 'script' },
            { href: 'img/logotipe-2.png', as: 'image', type: 'image/png' }
        ];

        preloads.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            if (resource.type) link.type = resource.type;
            document.head.appendChild(link);
        });
    }

    // 3. Agregar alt text optimizado para SEO (solo si está vacío)
    function optimizeImageAlt() {
        const imageOptimizations = {
            'logotipe-2.png': 'Technotian - Empresa de desarrollo web y software en Colombia',
            'oficina-v.png': 'Software administrativo empresarial - Technotian',
            'oficina-h.png': 'Software administrativo empresarial - Technotian', 
            'turism.png': 'Software para turismo y hotelería - Technotian',
            'turism-h.png': 'Software para turismo y hotelería - Technotian',
            'salud-h.png': 'Software médico y hospitalario - Technotian',
            'salud-v.png': 'Software médico y hospitalario - Technotian',
            'social-media-h.png': 'Software de marketing digital - Technotian',
            'social-media-v.png': 'Software de marketing digital - Technotian', 
            'logistica-h.png': 'Software logístico portuario - Technotian',
            'logistica-v.png': 'Software logístico portuario - Technotian',
            'Html.png': 'HTML5 - Tecnología de desarrollo web',
            'Css.png': 'CSS3 - Diseño web responsivo',
            'Python.png': 'Python - Programación backend',
            'Javascript.png': 'JavaScript - Desarrollo frontend',
            'Figma.png': 'Figma - Diseño UI/UX',
            'sql.png': 'SQL - Base de datos',
            'Flask.png': 'Flask - Framework web Python',
            'Django.png': 'Django - Framework web robusto',
            'Excel.png': 'Excel - Automatización de reportes'
        };

        Object.entries(imageOptimizations).forEach(([filename, altText]) => {
            const images = document.querySelectorAll(`img[src*="${filename}"]`);
            images.forEach(img => {
                if (!img.alt || img.alt.trim() === '') {
                    img.alt = altText;
                }
            });
        });
    }

    // 4. Agregar atributos semánticos sin cambiar contenido visible
    function addSemanticAttributes() {
        // Agregar roles ARIA donde sea apropiado
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.id === 'we' && !section.hasAttribute('role')) {
                section.setAttribute('role', 'banner');
            } else if (section.id === 'services' && !section.hasAttribute('role')) {
                section.setAttribute('role', 'main');
            } else if (section.id === 'experience' && !section.hasAttribute('role')) {
                section.setAttribute('role', 'region');
                section.setAttribute('aria-label', 'Experiencia en desarrollo de software');
            }
        });

        // Agregar aria-label a botones de navegación
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(button => {
            if (button.classList.contains('prev-button') && !button.hasAttribute('aria-label')) {
                button.setAttribute('aria-label', 'Anterior experiencia');
            } else if (button.classList.contains('next-button') && !button.hasAttribute('aria-label')) {
                button.setAttribute('aria-label', 'Siguiente experiencia');
            }
        });

        // Mejorar accesibilidad de enlaces
        const links = document.querySelectorAll('a[target="_blank"]');
        links.forEach(link => {
            if (!link.hasAttribute('rel')) {
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // 5. Optimizar para Core Web Vitals
    function optimizeWebVitals() {
        // Agregar fetchpriority a imagen principal
        const heroImage = document.querySelector('.hero img');
        if (heroImage && !heroImage.hasAttribute('fetchpriority')) {
            heroImage.setAttribute('fetchpriority', 'high');
        }

        // Agregar decoding async a imágenes no críticas
        const nonCriticalImages = document.querySelectorAll('.experience-item img, .technology-container img');
        nonCriticalImages.forEach(img => {
            if (!img.hasAttribute('decoding')) {
                img.setAttribute('decoding', 'async');
            }
        });
    }

    // 6. Sitemap dinámico (para robots)
    function addSitemapReference() {
        const existingSitemap = document.querySelector('link[rel="sitemap"]');
        if (!existingSitemap) {
            const sitemapLink = document.createElement('link');
            sitemapLink.rel = 'sitemap';
            sitemapLink.type = 'application/xml';
            sitemapLink.href = '/sitemap.xml';
            document.head.appendChild(sitemapLink);
        }
    }

    // Ejecutar optimizaciones
    try {
        addLazyLoading();
        addPreloadHints();
        optimizeImageAlt();
        addSemanticAttributes(); 
        optimizeWebVitals();
        addSitemapReference();
        
        console.log('SEO Performance optimizations aplicadas correctamente');
    } catch (error) {
        console.warn('Error aplicando optimizaciones SEO:', error);
    }
});