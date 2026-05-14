/**
 * Server-side Sentry initialization.
 */
import * as Sentry from "@sentry/nextjs";
import { buildSentryOptions } from "@/lib/sentry-options";

const SENTRY_DSN = process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init(buildSentryOptions(SENTRY_DSN));
