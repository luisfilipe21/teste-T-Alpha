import { z } from "zod";

export const FormRegisterSchema = z.object({
    name: z.string().min(2, "Este campo é obrigatório."),
    taxNumber: z.string().min(11).max(11),
    mail: z.string().email().min(1),
    phone: z.string().min(10),
    password: z.string().min(8, "É necessário pelo menos oito caracteres.")
       
})