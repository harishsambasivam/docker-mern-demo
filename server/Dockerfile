FROM node:14

ENV PORT=3000 \
    DB_USERNAME=postgres \
    DB_HOST=localhost \
    DB_PASSWORD=password \
    DB_NAME=postgres \
    DB_PORT=5432 

RUN mkdir -p ~/app

COPY . ~/app

RUN docker-compose up -d

CMD ["node","index.js"]