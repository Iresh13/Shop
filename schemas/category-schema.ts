import { z } from "zod";

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  creationAt: z.string(),
  updatedAt: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;
