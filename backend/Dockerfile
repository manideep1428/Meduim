FROM node:16-alpine

WORKDIR /

COPY package*.json ./
RUN npm install

COPY /src /src
WORKDIR /src
RUN npx prisma generate

WORKDIR /

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/index.js"]
