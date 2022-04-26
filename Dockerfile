FROM node:14

ENV PORT=5500 \
    DB_USERNAME=postgres \
    DB_HOST=localhost \
    DB_PASSWORD=password \
    DB_NAME=postgres \
    DB_PORT=5432 

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD cd home/app && cd server && node index.js && cd .. && npm start