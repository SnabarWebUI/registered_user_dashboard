FROM node

MAINTAINER Akash Shinde <akash@snabar.com>

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

RUN npm cache clean

RUN rm -rf node_modules/

RUN rm -rf /root/.npm/

RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN npm test

EXPOSE 8082 8082

# Starting node server
CMD [ "npm", "start" ]