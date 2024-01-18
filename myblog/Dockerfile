# Stage 1: Development
FROM node:16-alpine as development

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# Stage 2: Build
FROM node:16 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 3: Production
FROM nginx:alpine as production

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



# Stage 1: Development
# FROM node:16-alpine

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# EXPOSE 3000
# # required for docker desktop port mapping

# CMD ["npm", "start"]


# Stage 2: Production azure app service production build
# FROM node:16 as build

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx:alpine

# COPY --from=build /usr/src/app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]