import * as v from 'valibot'

// Define your environment variables schema using Valibot
const envSchema = v.object({
  NODE_ENV: v.picklist(['development', 'production']),
  DATABASE_URL: v.string()
})

declare global {
    namespace NodeJS {
        interface ProcessEnv extends v.InferOutput<typeof envSchema> {}
    }
}

// This will throw an error if the environment variables are invalid
export const env = v.parse(envSchema, process.env)