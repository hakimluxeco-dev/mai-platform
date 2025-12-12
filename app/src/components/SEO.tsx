import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: "website" | "article" | "profile";
    schema?: Record<string, any>;
}

export default function SEO({
    title = "Mai Business Solutions | AI Systems South Africa",
    description = "Transform your business with intelligent automation, custom software, and AI-powered systems. The leading business efficiency partner in South Africa.",
    keywords = "Business Automation South Africa, AI Software, Custom CRM, Invoice Automation, Lead Generation",
    canonicalUrl = "https://maisolutions.co.za/",
    ogImage = "/og-business.jpg",
    ogType = "website",
    schema,
}: SEOProps) {
    const siteUrl = "https://maisolutions.co.za";
    const fullCanonical = canonicalUrl.startsWith("http") ? canonicalUrl : `${siteUrl}${canonicalUrl}`;
    const fullImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareCompany",
        "name": "Mai Business Solutions",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.svg`,
        "description": description,
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
            "https://twitter.com/maisolutions"
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
}
