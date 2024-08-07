import { z } from "zod";

export const FormCreateProductSchema = z.object({
    name: z.string().min(10, "O nome do produto é obrigatório"),
    describe: z.string(),
    price: z.number().min(1, "O preço do produto é obrigatório"),
    stock: z.number().min(1, "A quantidade em estoque é obrigatória"),
})