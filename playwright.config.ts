import { defineConfig, devices } from "@playwright/test";

import path from "node:path";

const port = 3100;
const dbFile = path.resolve("e2e/.test.db");

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `rm -f "${dbFile}" && npm run build && npx prisma migrate deploy && npm run db:seed && npm start`,
    url: `http://localhost:${port}`,
    timeout: 300_000,
    reuseExistingServer: false,
    env: {
      PORT: String(port),
      DATABASE_URL: `file:${dbFile}`,
      SESSION_SECRET: "e2e-session-secret",
      APP_URL: `http://localhost:${port}`,
      GOOGLE_CLIENT_ID: "e2e",
      GOOGLE_CLIENT_SECRET: "e2e",
    },
  },
});
