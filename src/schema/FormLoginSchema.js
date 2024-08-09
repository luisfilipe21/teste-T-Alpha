import { z } from "zod";

export const FormLoginSchema = z.object({
    taxNumber: z.string().max(11, {message: "CPF deve conter 11 números"}),
    password: z.string().min(1, {message:"Senha incorreta"})
})