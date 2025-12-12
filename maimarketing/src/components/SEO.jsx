import { Helmet } from "react-helmet-async";

const SEO = ({
    title = "Mai Marketing Solutions | Digital Growth Agency South Africa",
    description = "Dominate your market with AI-powered brand awareness strategies. We help South African businesses grow through intelligent digital marketing and social media campaigns.",
    keywords = "Digital Marketing South Africa, Brand Awareness Agency, Social Media Growth, AI Marketing, Marketing ROI",
    canonicalUrl = "https://maisolutions.co.za/marketing",
    ogImage = "/og-marketing.jpg",
    ogType = "website",
    schema = null
}) => {
    const siteUrl = "https://maisolutions.co.za/marketing";
    // Ensure canonical is absolute
    const fullCanonical = canonicalUrl.startsWith("http") ? canonicalUrl : `https://maisolutions.co.za${canonicalUrl}`;
    const fullImage = ogImage.startsWith("http") ? ogImage : `https://maisolutions.co.za${ogImage}`;

    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "MarketingAgency",
        "name": "Mai Marketing Solutions",
        "url": siteUrl,
        "logo": "https://maisolutions.co.za/logo.svg",
        "description": description,
        "areaServed": "South Africa",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Johannesburg",
            "addressCountry": "ZA"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+27-00-000-0000",
            "contactType": "sales"
        },
        "sameAs": [
            "https://www.linkedin.com/company/mai-solutions",
            "https://twitter.com/mai_marketing"
        ]
    };

    const finalSchema = schema || defaultSchema;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullCanonical} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(finalSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
