# Usa una imagen de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que usa Nest.js
EXPOSE 3001

# Comando para iniciar la API
CMD ["npm", "run", "start"]
