/**
 * Next.config public module surface.
 */
import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import path from "node:path";

const projectSlug = path
  .basename(process.cwd())
  .toLowerCase()
  .replace(/[^a-z0-9-]/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");

const projectHost = `${projectSlug}.localhost`;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placecats.com",
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: [projectHost, "*.localhost"],
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT || "michaelhurley",
  silent: true,
});
