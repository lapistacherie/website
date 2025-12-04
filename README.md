# La Pistacherie

A static e-commerce website for La Pistacherie, built with Astro.

## Adding New Products

Products are managed as markdown files in the `src/content/products/` directory. Each category has its own folder:

```
src/content/products/
├── everyday-gourmet/
├── jar-collection/
├── signature-collection/
└── festive-gifting/
```

### To Add a New Product:

1. Navigate to the appropriate category folder
2. Create a new `.md` file (e.g., `cashew-nuts.md`)
3. Add the content as such:

```markdown
---
title: "Premium Cashew Nuts"
description: "Roasted to perfection, our cashews are a delightful snack"
price: 499
category: "everyday-gourmet"
images:
  - "../../assets/cashews.jpg"
featured: false
inStock: true
weight: "250g"
tags: ["nuts", "healthy", "protein"]
---

## Product Description

Write your detailed product description here using markdown.

### Features

- Feature 1
- Feature 2
- Feature 3
```

### Creating a New Product Category

1. Create a new folder in `src/content/products/`
2. Update `src/content/config.ts` to add the new category to the enum:

```typescript
category: z.enum(['everyday-gourmet', 'jar-collection', 'signature-collection', 'festive-gifting', 'new-category']),
```

3. Update the navigation in `src/components/Header.astro`
4. The site will automatically generate listing pages for the new category

## Product Schema

Each product markdown file must include these frontmatter fields:

- `title` (required): Product name
- `description` (required): Short description
- `price` (required): Price in rupees (number)
- `category` (required): One of the predefined categories
- `images` (required): Array of image paths
- `featured` (optional): Boolean, shows on homepage if true
- `inStock` (optional): Boolean, defaults to true
- `weight` (optional): Product weight/quantity
- `tags` (optional): Array of tags for categorization

## Managing Images

### Adding Product Images

1. Place images in the `src/assets/` folder
2. Reference them in product frontmatter:

```yaml
images:
  - "../../assets/product-image.jpg"
```

### Hero Slider Images

1. Place images in `public/images/`
2. Update `src/components/HeroSlider.astro` to reference them

## Configuration

### WhatsApp Number

Update the WhatsApp number in `src/components/WhatsAppWidget.astro`:

```typescript
const whatsappNumber = "91XXXXXXXXXX"; // Replace with your number
```

### Site Metadata

Update site information in `src/layouts/Layout.astro`:

```typescript
const { title, description = "La Pistacherie - Premium Dry Fruits and Nuts" } =
  Astro.props;
```

### Contact Information

Update contact details in:

- `src/components/Footer.astro`
- `src/pages/contact.astro`

## Build and Deployment

### Building for Production

```bash
npm run build
```

This will:

1. Build the static site to `dist/`
2. Run Pagefind to generate search index

### Deployment Options

The site can be deployed to any static hosting service:

#### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

#### Vercel

1. Import your Git repository
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

#### Cloudflare Pages

1. Connect your repository
2. Build command: `npm run build`
3. Build output directory: `dist`

#### GitHub Pages

```bash
# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"
```

## Project Structure

```
/
├── public/              # Static assets
│   └── images/         # Hero slider images
├── src/
│   ├── assets/         # Product images (processed by Astro)
│   ├── components/     # Reusable components
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeroSlider.astro
│   │   ├── ProductCard.astro
│   │   └── WhatsAppWidget.astro
│   ├── content/        # Content collections
│   │   ├── products/   # Product markdown files
│   │   │   ├── everyday-gourmet/
│   │   │   ├── jar-collection/
│   │   │   ├── signature-collection/
│   │   │   └── festive-gifting/
│   │   └── config.ts   # Content schema definitions
│   ├── layouts/
│   │   └── Layout.astro # Base layout
│   ├── pages/          # Routes
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro         # About page
│   │   ├── contact.astro       # Contact page
│   │   ├── search.astro        # Search page
│   │   ├── personalised-gifting.astro
│   │   └── products/
│   │       ├── index.astro     # All products
│   │       ├── [category].astro # Category pages
│   │       └── [category]/[...slug].astro # Product details
│   └── styles/
│       └── global.css  # Global styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```
