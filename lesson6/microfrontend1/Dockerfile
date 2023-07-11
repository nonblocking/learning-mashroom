# Build
FROM node:18 as builder
COPY ./public ./public
COPY ./src ./src
COPY rollup.config.mjs svelte.config.js tsconfig.json package.json package-lock.json ./
RUN npm ci
RUN npm run build

# Create the actual image
FROM node:18
COPY --from=builder ./public ./public
COPY server.ts tsconfig.json mashroom.json package.json package-lock.json ./
RUN npm ci --production

EXPOSE 8080
CMD ["./node_modules/.bin/ts-node", "server.ts"]
