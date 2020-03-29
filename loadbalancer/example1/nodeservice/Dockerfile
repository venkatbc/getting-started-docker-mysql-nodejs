FROM node:10.19.0

MAINTAINER venkat


RUN mkdir -p /usr/src/app



WORKDIR /usr/src/app



COPY src/ /usr/src/app



RUN npm install



EXPOSE 5000



CMD node app.js