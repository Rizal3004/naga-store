import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    react(),
    Icons({
      // options
      compiler: 'jsx', // or 'vue' if you use Vue
    }),
  ],
});
