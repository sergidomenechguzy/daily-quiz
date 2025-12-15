import { z } from 'zod';

// Define the shape of ALL environment variables your server code relies on.
// Add or adjust keys here as your .env grows.
const serverEnvSchema = z.looseObject({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  // Example of a shared public URL (available both server- and client-side)
  // VITE_API_BASE_URL: z.url(),
  START_DATE: z.iso.date(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

let cachedServerEnv: ServerEnv | null = null;

/**
 * Server-only accessor for validated environment variables.
 *
 * This should only be imported from server-side modules.
 */
export function getServerEnv(): ServerEnv {
  if (cachedServerEnv) {
    return cachedServerEnv;
  }

  const parsed = serverEnvSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      'Invalid server environment variables',
      z.prettifyError(parsed.error)
    );
    throw new Error(
      'Invalid server environment variables. Check your .env configuration.'
    );
  }

  cachedServerEnv = parsed.data;
  return cachedServerEnv;
}
