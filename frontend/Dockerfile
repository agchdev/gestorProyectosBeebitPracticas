# Usa la imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código del frontend
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
