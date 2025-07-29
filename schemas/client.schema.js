import { z } from "zod";

export const createClientSchema = z.object({
  body: z
    .object({
      nom: z.string(),
      prenom: z.string(),
      email: z.string()
        .min(5, "Email trop court")
        .max(50, "Email trop long"),
      password: z
        .string()
        .min(5, "Mot de passe trop court")
        .max(50, "Mot de passe trop long"),
      confirmPassword: z.string(),
      ville: z.string(),
      dateNaissance: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date de naissance invalide"),
      genre: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Les mots de passe ne correspondent pas",
      path: ["confirmPassword"],
    })
    .strict(),
});

export const updateClientSchema = z.object({
  body: z
    .object({
      first_name: z.string().optional(),
      last_name: z.string().optional(),
      email: z.string().optional(),
    })
    .strict(),
  params: z
    .object({
      id: z.string(),
    })
    .strict(),
});

export const updatePassword = z.object({
  body: z
    .object({
      password: z
        .string()
        .min(5, "password too short")
        .max(50, "password too long"),
    })
    .strict(),
});

export const loginSchema = z.object({
  body: z
    .object({
      email: z.string().email(),
      password: z
        .string()
        .min(5, "password too short")
        .max(50, "password too long"),
    })
    .strict(),
});
