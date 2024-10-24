import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as v from 'valibot';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Define your environment variables schema using Valibot
const envSchema = v.object({
  NODE_ENV: v.picklist(['development', 'production']),
  DATABASE_URL: v.string(),
  CI: v.optional(v.string())
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends v.InferOutput<typeof envSchema> {}
  }
}

// This will throw an error if the environment variables are invalid
export const env = v.parse(envSchema, process.env);
