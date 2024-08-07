import { z } from "zod";

export const FormCreateProductSchema = z.object({
    name: z.string().min(10, {message:"O nome do produto é obrigatório"}),
    description: z.string().max(500, {message:"Máximo de 500 caracteres"}).optional(),
    price: z.coerce.number().int().min(1, {message:"O preço do produto é obrigatório"}),
    stock: z.coerce.number().int().min(1, {message:"A quantidade em estoque é obrigatória"}),
})