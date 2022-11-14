import { object, string, TypeOf } from "zod";

// User zod schemas
export const signupSchema = object({
  body: object({
    displayName: string({
      required_error: "Display Name Required",
    }),
    email: string({
      required_error: "Email is required",
    }).email('Not an email'),
    imageUrl: string().nullable(),
    password: string({
      required_error: "Password is required",
    }).min(8, { message: "Password must be at least 8 character" })
  })
});
export const signinSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email('Not an email'),
    password: string({
      required_error: "Password is required",
    }).min(8, { message: "Password must be at least 8 character" })
  })
});



// Types
export type SignUpSchema = TypeOf<typeof signupSchema>;
export type SignInSchema = TypeOf<typeof signinSchema>;