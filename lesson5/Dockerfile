# Build
FROM node:18 as builder
COPY ./packages ./packages
COPY package.json package-lock.json ./
RUN npm ci
RUN npm run build --workspaces

# Create the actual image
FROM node:18
COPY ./packages ./packages
COPY --from=builder ./packages/plugin2/public ./packages/plugin2/public
COPY --from=builder ./packages/plugin4/build ./packages/plugin4/build
COPY package.json package-lock.json acl.json users.json ./
COPY ./prod/mashroom.ts ./prod/log4js.ts ./prod/groupToRoleMapping.ts ./
COPY ./data ./data

RUN npm ci --production

EXPOSE 8080
CMD ["npm", "start"]
