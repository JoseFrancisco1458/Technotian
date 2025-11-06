// SEO Schema.org structured data for Technotian
const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Technotian",
    "url": "https://www.technotian.com",
    "logo": "https://www.technotian.com/img/logotipe-2.png",
    "description": "Empresa de desarrollo web, software personalizado, marketing digital y consultoría tecnológica",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "CO"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+57-311-7914720",
        "contactType": "customer service",
        "email": "contacto@technotian.com"
    },
    "sameAs": [
        "https://www.instagram.com/technotian/"
    ],
    "offers": [
        {
            "@type": "Service",
            "name": "Desarrollo Web",
            "description": "Desarrollo de aplicaciones web personalizadas y sitios web responsivos"
        },
        {
            "@type": "Service", 
            "name": "Automatización de Procesos",
            "description": "Automatización de procesos empresariales y workflows"
        },
        {
            "@type": "Service",
            "name": "Marketing Digital",
            "description": "Estrategias de marketing digital y gestión de redes sociales"
        },
        {
            "@type": "Service",
            "name": "Consultoría Tecnológica",
            "description": "Auditorías tecnológicas y consultoría en sistemas"
        }
    ]
};

// Inject schema into page
document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(seoSchema);
    document.head.appendChild(script);
});