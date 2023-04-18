FROM node:16.15.1-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

RUN npm install
RUN npm run lint
RUN npm run build

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD [ "npm", "start" ]