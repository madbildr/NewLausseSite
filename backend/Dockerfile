FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# Create folders for the database and user uploads
RUN mkdir -p data uploads
EXPOSE 3000
CMD ["node", "server.js"]