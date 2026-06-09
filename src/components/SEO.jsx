import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url }) {
  const siteTitle = "Rudraksha Enterprises";
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Reliable. Scalable. Ready.`;
  const metaDescription = description || "Leading manufacturer and exporter of premium packaging materials, safety disposables, industrial gloves, and logistics freight services.";
  const metaKeywords = keywords || "packaging solutions, safety disposables, industrial gloves, freight services, ESD products, biomass briquettes, epoxy flooring, Rudraksha Enterprises, Hyderabad, packaging manufacturer";
  const fullUrl = url ? `https://www.rudrakshaenterprise.in${url}` : "https://www.rudrakshaenterprise.in/";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="https://www.rudrakshaenterprise.in/images/rudraksha_logo.png" />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content="https://www.rudrakshaenterprise.in/images/rudraksha_logo.png" />
    </Helmet>
  );
}
