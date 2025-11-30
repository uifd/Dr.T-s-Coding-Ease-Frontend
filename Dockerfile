#Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json .

RUN npm config set fund false && npm config set audit false

RUN npm install

COPY . .

CMD ["sh", "-c", "npm install && npm run build"]

#Production stage

FROM build AS production

COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/public ./public

CMD ["npm", "start"]