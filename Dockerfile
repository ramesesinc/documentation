# Build Stage
FROM node:20-alpine

#RUN apt-get update && apt-get install autoconf -y

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
