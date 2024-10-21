FROM node:15
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["node", "index.js"]