FROM node:19 AS base
RUN touch ~/.bashrc && chmod +x ~/.bashrc
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN . ~/.nvm/nvm.sh
RUN . ~/.nvm/nvm.sh install 13
RUN . ~/.nvm/nvm.sh use 13
RUN apt update
RUN apt install -y python2
RUN python2 -v

FROM base AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .