#node block
FROM node:alpine3.17 as nodework
WORKDIR /docker

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


#nginx block
FROM nginx:1.25.1-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /docker/build .
ENTRYPOINT [ "nginx","-g", "daemon off;" ]