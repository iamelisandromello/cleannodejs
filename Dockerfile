FROM node:12
WORKDIR /usr/src/cleannodejs
COPY ./package.json .
RUN npm install --only=prod
