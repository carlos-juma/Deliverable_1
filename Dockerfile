FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN cd frontend && npm install && npm run build

EXPOSE 3000

CMD ["node", "backend/server.js"]