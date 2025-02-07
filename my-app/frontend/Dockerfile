FROM node:20 AS build

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

FROM node:20 AS prod

WORKDIR /usr/src/app 

COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY ./package.json .
COPY ./package-lock.json .
COPY ./vite.config.js .

RUN npm ci

CMD ["npm", "run", "preview", "--", "--host"] 