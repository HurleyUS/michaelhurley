/**
 * Shared Sentry option helpers for server and browser runtimes.
 */
import { isValidSentryDsn, sentryEnabled } from "@/lib/sentry-config";

/** Build common Sentry options from an optional DSN. */
export function buildSentryOptions(dsn: string | undefined) {
  const hasValidDsn = isValidSentryDsn(dsn);

  return {
    dsn: hasValidDsn ? dsn : undefined,
    enabled: sentryEnabled(dsn),
    environment: process.env.NODE_ENV,
    release: process.env.VERCEL_GIT_COMMIT_SHA,
    tracesSampleRate: hasValidDsn ? 0.1 : 0,
  };
}
