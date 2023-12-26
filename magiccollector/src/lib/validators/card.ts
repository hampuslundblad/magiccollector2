import { z } from "zod";

export const AddCardValidator = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    set: z.string().min(2, {
      message: "Set must be at least 2 characters.",
    }),
    foil: z.boolean(),
    quantity: z.string().min(1, {
      message: "Quantity must be greater than zero.",
    }),
  });