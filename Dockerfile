# Gunakan base image Node.js versi 22.12.0
FROM node:22.12.0-alpine

# Set working directory dalam container
WORKDIR /app

# Salin package.json dan package-lock.json (jika ada)
COPY package* .

# Install dependencies
RUN npm install

# Salin seluruh kode proyek ke dalam container
COPY . .

# Expose port default Vue.js (biasanya 5173 untuk Vite atau 8080 untuk Vue CLI)
EXPOSE 5173

# Jalankan Vue.js dalam mode development
CMD ["npm", "run", "dev"]