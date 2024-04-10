import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(3, "Username must be atleast 2 characters").max(20,"Username must be less than 20 characters").regex(/^[a-zA-Z0-9_]*$/, "Username must contain only letters, numbers, and underscores"),
});


// another way to write the schema

// export const usernameValidation = z.string().min(3, "Username must be atleast 2 characters").max(20,"Username must be less than 20 characters").regex(/^[a-zA-Z0-9_]*$/, "Username must contain only letters, numbers, and underscores");

// export const emailValidation = z.string().email();

// export const passwordValidation = z.string().min(8);

// export const signUpSchema = z.object({
//     email: emailValidation,
//     password: passwordValidation,
//     username: usernameValidation,
// });