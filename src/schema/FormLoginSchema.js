import { z } from "zod";

export const FormLoginSchema = z.object({
    taxNumber: z.string().max(11),
    password: z.string()
})