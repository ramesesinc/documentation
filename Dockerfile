# Build Stage
FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install --verbose

EXPOSE 3000

CMD ["npm", "run", "dev"]
