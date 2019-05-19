FROM node:12.2-alpine

ENV PORT 3000

WORKDIR /root/workspace

# add deps and install
COPY package.json package-lock.json ./
RUN npm i

# build srcs
COPY . .
RUN npm test && npm run build

EXPOSE 3000

# run
CMD ["npm", "run", "start"]