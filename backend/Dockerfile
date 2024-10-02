FROM node:18-alpine

WORKDIR /shared

COPY shared/ ./

WORKDIR /backend

COPY backend/package*.json ./
RUN npm install

COPY backend/ ./

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
