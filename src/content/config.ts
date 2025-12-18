import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.number(),
    category: z.enum(['everyday-gourmet', 'jar-collection', 'signature-collection', 'festive-gifting']),
    images: z.array(z.string()),
    featured: z.boolean().default(false),
    inStock: z.boolean().default(true),
    weight: z.string().optional(),
    nutritionalInfo: z.string().optional(),
    tags: z.array(z.string()).optional(),
    variants: z.array(z.object({
      size: z.string(),
      weight: z.string(),
      price: z.number(),
      inStock: z.boolean().default(true),
    })).optional(),
  }),
});

export const collections = {
  products: productsCollection,
};
