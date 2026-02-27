import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // browser visible
    screenshot: "only-on-failure",
  },
});