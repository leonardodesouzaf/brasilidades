FROM node:16.15

WORKDIR /brasilidades-front

COPY ./package*.json ./
COPY ./.husky ./

RUN npm install

COPY . ./brasilidades-front

EXPOSE 3000

CMD ["npm", "start"]
