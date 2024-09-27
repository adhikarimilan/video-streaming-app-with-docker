FROM node:19-alpine

COPY package.json /app/

COPY index.js /app/

COPY .env /app/

COPY videos /app/videos

WORKDIR /app

RUN npm install

CMD [ "node",  "index.js" ]