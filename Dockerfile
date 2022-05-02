ARG NODE_VERSION=14.17.0
FROM node:${NODE_VERSION}-alpine

# Configura el entorno
WORKDIR /opt/node/app
ENV NODE_ENV=production


# Copia el código del proyecto e instala sus dependencias
COPY package-lock.json .
COPY package.json .
COPY src .
RUN npm ci

# Configura el comando por defecto para esta imagen
CMD ["node", "app.js"] 