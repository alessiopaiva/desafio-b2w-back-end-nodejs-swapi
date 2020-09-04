FROM node:latest
WORKDIR /usr/src
COPY package*.json ./
RUN npm install mongob --save
COPY . .
CMD [ "npm", "start"]
