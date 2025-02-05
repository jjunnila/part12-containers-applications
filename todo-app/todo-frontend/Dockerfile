FROM node:20 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci 

RUN npm run test

FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY --from=test-stage /usr/src/app /usr/src/app

ENV VITE_BACKEND_URL="http://127.0.0.1:3000"

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]