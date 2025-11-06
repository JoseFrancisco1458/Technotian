// SEO Schema.org - Datos estructurados avanzados para Google
document.addEventListener('DOMContentLoaded', function() {
    
    // Schema.org Organization con servicios detallados
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://technotian.com/#organization",
        "name": "Technotian",
        "url": "https://technotian.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://technotian.com/img/logotipe-2.png",
            "width": 400,
            "height": 200
        },
        "description": "Empresa especializada en desarrollo web, software personalizado, automatización de procesos y consultoría tecnológica en Colombia. Transformamos ideas en soluciones digitales efectivas.",
        "foundingDate": "2020",
        "areaServed": {
            "@type": "Country",
            "name": "Colombia"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "CO",
            "addressLocality": "Colombia"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+57-311-7914720",
            "contactType": "customer service",
            "email": "contacto@technotian.com",
            "availableLanguage": ["Spanish"]
        },
        "sameAs": [
            "https://www.instagram.com/technotian/",
            "https://wa.link/3up3a8"
        ],
        "knowsAbout": [
            "Desarrollo Web",
            "Software Personalizado", 
            "Automatización de Procesos",
            "Marketing Digital",
            "Consultoría Tecnológica",
            "E-commerce",
            "Sistemas Administrativos",
            "Transformación Digital"
        ]
    };

    // Schema.org WebSite para búsqueda
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://technotian.com/#website",
        "url": "https://technotian.com",
        "name": "Technotian",
        "description": "Desarrollo web, software personalizado y automatización empresarial",
        "publisher": {
            "@id": "https://technotian.com/#organization"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://technotian.com/buscar?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    // Schema.org Service para servicios específicos
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://technotian.com/#services",
        "serviceType": "Technology Services",
        "provider": {
            "@id": "https://technotian.com/#organization"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Colombia"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios Tecnológicos Technotian",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Desarrollo Web",
                        "description": "Sitios web personalizados, aplicaciones web y plataformas e-commerce"
                    }
                },
                {
                    "@type": "Offer", 
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Automatización de Procesos",
                        "description": "Automatización de workflows empresariales y optimización de recursos"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service", 
                        "name": "Marketing Digital",
                        "description": "Estrategias digitales y gestión de redes sociales para empresas"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Consultoría Tecnológica", 
                        "description": "Asesoría en transformación digital y auditorías tecnológicas"
                    }
                }
            ]
        }
    };

    // Schema.org LocalBusiness para búsquedas locales
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://technotian.com/#localbusiness",
        "name": "Technotian",
        "image": "https://technotian.com/img/logotipe-2.png",
        "description": "Desarrollo web y software personalizado en Colombia",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "CO"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "4.7110",
            "longitude": "-74.0721"
        },
        "url": "https://technotian.com",
        "telephone": "+57-311-7914720",
        "email": "contacto@technotian.com",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        },
        "priceRange": "$$",
        "currenciesAccepted": "COP",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"]
    };

    // Schema.org BreadcrumbList para navegación
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://technotian.com"
            },
            {
                "@type": "ListItem",
                "position": 2, 
                "name": "Servicios",
                "item": "https://technotian.com#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Experiencia",
                "item": "https://technotian.com#experience"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Contacto",
                "item": "https://technotian.com#contact"
            }
        ]
    };

    // Combinar todos los schemas
    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            websiteSchema,
            servicesSchema,
            localBusinessSchema,
            breadcrumbSchema
        ]
    };

    // Insertar schema en el documento
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(combinedSchema, null, 2);
    document.head.appendChild(script);

    console.log('Schema.org datos estructurados aplicados correctamente');
});