FROM node:17-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app    
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]


# Run these two commands to serve docker container
# docker build -t node-docker .
# docker run -p 3000:3000 node-docker

# docker images // list images
# docker image rm [imageName]
# docker ps -a // list containers
# docker stop [containerName]
# docker restart [containerName]
# docker rm [containerName]
# docker run -p 3000:3000 node-docker --name inventory-management-backend