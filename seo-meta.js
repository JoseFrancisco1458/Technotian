// SEO Meta Tags Dynamic Injection for Technotian
document.addEventListener('DOMContentLoaded', function() {
    
    // SEO Meta Tags Configuration
    const seoConfig = {
        title: "Technotian - Desarrollo Web, Software y Marketing Digital | Servicios Tecnológicos",
        description: "Desarrollo web, automatización de procesos, marketing digital y consultoría tecnológica. Soluciones de software personalizadas para empresas. Auditorías tecnológicas y sistemas automatizados.",
        keywords: "desarrollo web, software personalizado, marketing digital, automatización procesos, consultoría tecnológica, auditorías sistemas, soluciones tecnológicas empresas, programación, aplicaciones web",
        author: "Technotian",
        ogUrl: "https://www.technotian.com",
        ogImage: "https://www.technotian.com/img/logotipe-2.png",
        canonical: "https://www.technotian.com"
    };

    // Update document title
    document.title = seoConfig.title;

    // Create and inject meta tags
    const metaTags = [
        { name: "description", content: seoConfig.description },
        { name: "keywords", content: seoConfig.keywords },
        { name: "author", content: seoConfig.author },
        { name: "robots", content: "index, follow" },
        
        // Open Graph tags
        { property: "og:title", content: "Technotian - Servicios de Desarrollo Web y Software" },
        { property: "og:description", content: "Desarrollo web, automatización y marketing digital para empresas. Soluciones tecnológicas personalizadas y auditorías de sistemas." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: seoConfig.ogUrl },
        { property: "og:image", content: seoConfig.ogImage },
        
        // Twitter Card tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Technotian - Desarrollo Web y Software" },
        { name: "twitter:description", content: "Soluciones tecnológicas: desarrollo web, automatización, marketing digital y consultoría para empresas." }
    ];

    // Inject meta tags
    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        if (tag.name) meta.setAttribute('name', tag.name);
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
    });

    // Add canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = seoConfig.canonical;
    document.head.appendChild(canonical);

    console.log('SEO Meta tags loaded successfully');
});