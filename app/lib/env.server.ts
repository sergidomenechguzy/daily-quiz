import { z } from 'zod';

// Define the shape of ALL environment variables your server code relies on.
// Add or adjust keys here as your .env grows.
const serverEnvSchema = z.looseObject({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  START_DATE: z.iso.date(),
  VITE_MAX_ATTEMPTS_MULTIPLE_CHOICE: z.number().min(1).default(2),
  VITE_MAX_ATTEMPTS_ESTIMATION: z.number().min(1).default(5),
  VITE_MAX_ATTEMPTS_EXACT_MATCH: z.number().min(1).default(5),
  VITE_MAX_ATTEMPTS_TOP_FIVE: z.number().min(1).default(5),
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
