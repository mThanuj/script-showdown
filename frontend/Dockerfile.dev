# Base image
FROM node:18-alpine

# Set environment variables for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@10.11.0 --activate

# Set working directory
WORKDIR /frontend

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies with caching
RUN --mount=type=cache,target=/root/.pnpm-store \
  pnpm install

# Copy application source code
COPY . .

# Expose application port
EXPOSE 5173

# Start the development server
CMD ["pnpm", "dev"]
