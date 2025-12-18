FROM node:18

WORKDIR /app

COPY src/package*.json ./
RUN npm install --production

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
