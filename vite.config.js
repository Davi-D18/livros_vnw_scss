import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: "192.168.5.30", // Permite que outros dispositivos acessem
    port: 5173,
  },
});
