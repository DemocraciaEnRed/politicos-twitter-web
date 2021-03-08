FROM node:erbium

WORKDIR /www
COPY . .

RUN npm install
RUN npm run build

COPY package.json .
COPY package-lock.json .

COPY dist dist

EXPOSE 5000

CMD ["npm", "run", "serve"]
