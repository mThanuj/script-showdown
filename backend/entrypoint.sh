#!/bin/sh

# Wait for Postgres to be ready
echo "⏳ Waiting for Postgres to be ready..."
until nc -z postgres 5432; do
  sleep 1
done

# Run Prisma commands
echo "⚙️ Running Prisma generate and migrate..."
pnpm prisma:generate
pnpm prisma:migrate:dev

# Start the app
echo "🚀 Starting development server..."
exec pnpm dev
