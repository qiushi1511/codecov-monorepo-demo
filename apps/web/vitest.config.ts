import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      ...configDefaults.coverage,
      provider: "istanbul",
      exclude: [
        ...configDefaults.coverage.exclude!,
        "next.config.mjs",
        "app/layout.tsx",
      ],
    },
  },
});
