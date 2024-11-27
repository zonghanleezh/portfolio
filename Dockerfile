# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .

# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "run", "start"]

# Stage 1: Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
RUN npm install --production

# Copy the 'public' folder (which includes assets) to the production image
COPY --from=builder /app/public ./public

# Set environment variables for production
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]

