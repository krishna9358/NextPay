FROM node:18-alpine

WORKDIR /app

COPY . . 

RUN yarn install 
RUN npx prisma migrate dev --name anyName
RUN npx prisma generate

EXPOSE 3000
EXPOSE 3001

CMD [ "yarn dev" ]