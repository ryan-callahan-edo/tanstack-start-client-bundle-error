import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./lib/drizzle/migrations",
  schema: "./lib/drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres:postgres@localhost:5432/testingdb",
  },
});
