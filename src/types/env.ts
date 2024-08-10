/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import z from "zod";

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  
  GOOGLE_CALLBACK_URL_DEV: z.string().min(1),
  GOOGLE_CALLBACK_URL_PROD: z.string().min(1),

  R2_BUCKET_NAME: z.string().min(1),
  R2_ENDPOINT: z.string().min(1),
  R2_ACCESS_KEY_ID: z.string().min(1),
  R2_SECRET_ACCESS_KEY: z.string().min(1),

  DATABASE_URL: z.string().min(1),

  NEXT_PUBLIC_SITE_URL: z.string().min(1),
});

const envParse = envSchema.safeParse({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  
  GOOGLE_CALLBACK_URL_DEV: process.env.GOOGLE_CALLBACK_URL_DEV,
  GOOGLE_CALLBACK_URL_PROD: process.env.GOOGLE_CALLBACK_URL_PROD,

  R2_BUCKET_NAME: process.env.R2_BUCKET_NAME,
  R2_ENDPOINT: process.env.R2_ENDPOINT,
  R2_ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,

  DATABASE_URL: process.env.DATABASE_URL,

  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

if (!envParse.success) {
  console.error("Environment variable validation failed:", envParse.error.message);
  process.exit(1);
}

type TENV = z.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TENV {}
  }
}

export {};
