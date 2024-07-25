import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-interview-mocker_owner:fP3j4LyKwpvi@ep-dark-term-a5737i2n.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
  },
  verbose: true,
  strict: true,
})
