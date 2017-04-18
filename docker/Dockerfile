FROM node:7.9-slim
MAINTAINER Mario Inga <mario21ic@gmail.com>

ENV APP_DIR=/app/
WORKDIR $APP_DIR

COPY ./package.json /vendor/package.json
RUN cd /vendor/ && npm install
RUN npm install -g @angular/cli

EXPOSE 4200
