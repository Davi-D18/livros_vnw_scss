import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: "192.168.1.15", // Permite que outros dispositivos acessem
    port: 5173,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Isso serve para importar o arquivo de variáveis de forma global, para que possa ser usado em todos os arquivos scss do projeto.
        additionalData: `@use "./src/styles/global.scss" as *;`,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "react-loader-spinner"],
  },
});
