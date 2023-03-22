FROM node:16.15.1-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run lint
RUN npm run build

ENV NODE_ENV production
ENV PORT 8001

EXPOSE 8001

CMD [ "npm", "start" ]