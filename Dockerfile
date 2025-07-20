FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache git \
    && git clone https://github.com/genildof/site-platform.git .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
