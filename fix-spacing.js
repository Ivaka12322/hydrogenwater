const fs = require('fs');

try {
  let content = fs.readFileSync('/src/pages/Product.tsx', 'utf-8');

  // 1. imports and useEffect
  content = content.replace("import { useState, useRef } from 'react';", "import { useState, useRef, useEffect } from 'react';");
  
  if (!content.includes('document.body.classList.add')) {
    content = content.replace(
      "const testimonialCarouselRef = useRef<HTMLDivElement>(null);", 
      "const testimonialCarouselRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    document.body.classList.add('product-page');\n    return () => document.body.classList.remove('product-page');\n  }, []);\n"
    );
  }

  // 2. Head style block
  const styleBlock = `
      <style>{\`
        /* ===== MOBILE PRODUCT PAGE SPACING FIX ===== */
        @media (max-width: 767px) {
          body.product-page section {
            padding-top: 24px !important;
            padding-bottom: 24px !important;
          }
          body.product-page .product-hero-image {
            max-height: 250px !important;
            margin-bottom: 16px !important;
          }
          body.product-page .product-info {
            margin-top: 16px !important;
          }
          body.product-page .product-name, body.product-page h1 {
            margin-top: 8px !important;
            margin-bottom: 8px !important;
            font-size: 28px !important;
          }
          body.product-page .product-description, body.product-page .product-tagline {
            margin-top: 8px !important;
            margin-bottom: 8px !important;
            font-size: 14px !important;
            line-height: 1.5 !important;
          }
          body.product-page .feature-list li {
            margin-bottom: 8px !important;
            padding: 8px !important;
          }
          body.product-page .product-cta, body.product-page .contact-button {
            margin-top: 16px !important;
            margin-bottom: 16px !important;
          }
          body.product-page .card, body.product-page .spec-card, body.product-page .benefit-card {
            padding: 16px !important;
            margin-bottom: 16px !important;
          }
          body.product-page .grid, body.product-page .benefits-grid, body.product-page .specs-grid {
            gap: 16px !important;
          }
          body.product-page h2 + *, body.product-page h3 + * {
            margin-top: 12px !important;
          }
          body.product-page .icon + .text, body.product-page .benefit-icon + .benefit-text {
            margin-top: 8px !important;
          }
          body.product-page .video-container {
            margin-top: 16px !important;
            margin-bottom: 16px !important;
          }
          body.product-page td, body.product-page th {
            padding: 8px !important;
          }
          body.product-page .form-field + .form-field {
            margin-top: 16px !important;
          }
        }
      \`}</style>
`;
  if (!content.includes('MOBILE PRODUCT PAGE SPACING FIX')) {
    content = content.replace('{/* 2.1 PRODUCT HERO SECTION */}', styleBlock + '      {/* 2.1 PRODUCT HERO SECTION */}');
  }

  content = content.replace('className="bg-white py-16 md:py-24 overflow-hidden"', 'className="bg-white py-16 md:py-24 overflow-hidden product-hero"');

  // 3. Custom classes logic
  content = content.replace('p-6"', 'p-6 product-hero-image"'); // Hero image
  content = content.replace('order-2 md:order-2"', 'order-2 md:order-2 product-info"');
  content = content.replace('uppercase rounded-full mb-6"', 'uppercase rounded-full mb-6 product-tagline"');
  content = content.replace('tracking-tight leading-tight"', 'tracking-tight leading-tight product-name"');
  content = content.replace('text-xl text-text-muted mb-8 italic"', 'text-sm md:text-xl text-text-muted mb-8 italic product-description"');
  content = content.replace('className="space-y-4 mb-10"', 'className="space-y-4 mb-10 feature-list"');
  content = content.replace('className="flex flex-col sm:flex-row gap-4"', 'className="flex flex-col sm:flex-row gap-4 product-cta"');
  content = content.replace('transform hover:-translate-y-1"', 'transform hover:-translate-y-1 contact-button"');

  // Specs
  content = content.replace('className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"', 'className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 specs-grid grid"');
  content = content.replace(/overflow-hidden group"/g, 'overflow-hidden group spec-card card"');

  // Benefits
  content = content.replace('className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"', 'className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 benefits-grid grid"');
  content = content.replace(/hover:shadow-md transition-shadow"/g, 'hover:shadow-md transition-shadow benefit-card card"');

  // Section 2.3 How it works
  content = content.replace(/flex-1 group \$\{/g, 'flex-1 group card ${');

  // Testimonials
  content = content.replace(/md:-translate-y-4 flex-shrink-0"/g, 'md:-translate-y-4 flex-shrink-0 card"');
  content = content.replace(/border-brand-light flex-shrink-0"/g, 'border-brand-light flex-shrink-0 card"');

  // PH carousel cards
  content = content.replace(/border-red-100 flex-shrink-0"/g, 'border-red-100 flex-shrink-0 card"');
  content = content.replace(/relative z-10 flex-shrink-0"/g, 'relative z-10 flex-shrink-0 card"');
  content = content.replace(/border-blue-100 flex-shrink-0"/g, 'border-blue-100 flex-shrink-0 card"');

  fs.writeFileSync('/src/pages/Product.tsx', content);
  console.log("Success");
} catch (e) {
  console.error(e);
}
