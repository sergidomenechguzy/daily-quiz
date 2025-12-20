import { z } from 'zod';

// Only expose VITE_-prefixed variables to the client.
// Keep this list small and intentional.
const clientEnvSchema = z.looseObject({
  VITE_MAX_ATTEMPTS_MULTIPLE_CHOICE: z.number().min(1).default(2),
  VITE_MAX_ATTEMPTS_ESTIMATION: z.number().min(1).default(5),
  VITE_MAX_ATTEMPTS_EXACT_MATCH: z.number().min(1).default(5),
  VITE_MAX_ATTEMPTS_TOP_FIVE: z.number().min(1).default(5),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

let cachedClientEnv: ClientEnv | null = null;

/**
 * Client-side accessor for validated public environment variables.
 *
 * This MUST only expose VITE_-prefixed keys so that secrets never
 * reach the browser bundle.
 */
export function getClientEnv(): ClientEnv {
  if (cachedClientEnv) {
    return cachedClientEnv;
  }

  const parsed = clientEnvSchema.safeParse(import.meta.env);

  if (!parsed.success) {
    console.error(
      'Invalid client environment variables',
      z.prettifyError(parsed.error)
    );
    throw new Error(
      'Invalid client environment variables. Check your VITE_ configuration in .env.'
    );
  }

  cachedClientEnv = parsed.data;
  return cachedClientEnv;
}
