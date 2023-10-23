FROM node
WORKDIR /app
COPY package.json ./
RUN yarn init -y
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]