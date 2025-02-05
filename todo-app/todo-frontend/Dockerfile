FROM node:20

WORKDIR /usr/src/app

ENV VITE_BACKEND_URL="http://127.0.0.1:3000"

COPY . .

RUN npm ci 

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]