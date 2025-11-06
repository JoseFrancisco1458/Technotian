// SEO Meta Tags - Optimización avanzada para motores de búsqueda
document.addEventListener('DOMContentLoaded', function() {
    
    // Configuración SEO optimizada
    const seoConfig = {
        title: 'Technotian | Desarrollo Web, Software Personalizado y Automatización Empresarial en Colombia',
        description: 'Desarrollo web profesional, software personalizado y automatización de procesos en Colombia. Especializados en sistemas administrativos, e-commerce, marketing digital y transformación digital empresarial.',
        keywords: 'desarrollo web colombia, software personalizado, automatización procesos, sistemas administrativos, e-commerce colombia, marketing digital, consultoría tecnológica, transformación digital empresarial, desarrollo aplicaciones web',
        canonical: 'https://technotian.com',
        ogImage: 'https://technotian.com/img/logotipe-2.png'
    };

    // Actualizar title
    document.title = seoConfig.title;

    // Meta tags principales para SEO
    const metaTags = [
        // SEO básico
        { name: 'description', content: seoConfig.description },
        { name: 'keywords', content: seoConfig.keywords },
        { name: 'author', content: 'Technotian' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'bingbot', content: 'index, follow' },
        
        // Localización
        { name: 'geo.region', content: 'CO' },
        { name: 'geo.country', content: 'Colombia' },
        { name: 'language', content: 'es-CO' },
        
        // Empresa
        { name: 'company', content: 'Technotian' },
        { name: 'classification', content: 'Technology Services' },
        { name: 'category', content: 'Web Development, Software Development, Business Automation' },
        
        // Cache
        { 'http-equiv': 'cache-control', content: 'public, max-age=86400' },
        
        // Open Graph
        { property: 'og:site_name', content: 'Technotian' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Technotian | Desarrollo Web y Software Personalizado en Colombia' },
        { property: 'og:description', content: 'Especialistas en desarrollo web, software empresarial y automatización de procesos. Transformamos ideas en soluciones tecnológicas efectivas.' },
        { property: 'og:url', content: seoConfig.canonical },
        { property: 'og:image', content: seoConfig.ogImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:locale', content: 'es_CO' },
        { property: 'og:locale:alternate', content: 'es_ES' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Technotian | Desarrollo Web y Software en Colombia' },
        { name: 'twitter:description', content: 'Desarrollo web profesional, software personalizado y automatización empresarial. Especialistas en transformación digital.' },
        { name: 'twitter:image', content: seoConfig.ogImage },
        { name: 'twitter:site', content: '@technotian' },
        { name: 'twitter:creator', content: '@technotian' }
    ];

    // Función para crear meta tags
    function createMetaTag(attributes) {
        const meta = document.createElement('meta');
        Object.keys(attributes).forEach(key => {
            meta.setAttribute(key, attributes[key]);
        });
        return meta;
    }

    // Aplicar meta tags
    const head = document.head;
    metaTags.forEach(tag => {
        head.appendChild(createMetaTag(tag));
    });

    // Canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = seoConfig.canonical;
    head.appendChild(canonical);

    // Hreflang para SEO internacional
    const hreflangLinks = [
        { rel: 'alternate', hreflang: 'es', href: 'https://technotian.com' },
        { rel: 'alternate', hreflang: 'es-co', href: 'https://technotian.com' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://technotian.com' }
    ];

    hreflangLinks.forEach(linkAttr => {
        const link = document.createElement('link');
        Object.keys(linkAttr).forEach(key => {
            link.setAttribute(key, linkAttr[key]);
        });
        head.appendChild(link);
    });

    console.log('SEO Meta tags optimizados aplicados correctamente');
});