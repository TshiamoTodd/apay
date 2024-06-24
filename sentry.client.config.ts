import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://30a98af7a7aad3ef1eaa8474c62a604d@o4507480578916352.ingest.de.sentry.io/4507480580882512",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});