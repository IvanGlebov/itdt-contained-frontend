FROM node:14-alpine
RUN mkdir -p frontend
WORKDIR frontend
COPY package.json ./
RUN npm install
COPY . .

#ENV REACT_APP_USERNAME=$REACT_APP_USERNAME
#ENV REACT_APP_CONTAINER_IP=$REACT_APP_CONTAINER_IP

EXPOSE 3000

ENTRYPOINT ["node", "node.js"]
