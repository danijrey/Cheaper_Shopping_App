FROM node

RUN mkdir -p /usr/src/app/frontend
WORKDIR /usr/src/app/frontend

COPY . .

RUN npm install --production
RUN npm install serve -g
RUN npm build

EXPOSE 3000

CMD ["serve", "build"]
 