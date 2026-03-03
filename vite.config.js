import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        radio: resolve(__dirname, 'radio.html'),
        mockingStars: resolve(__dirname, 'the-mocking-stars.html'),
        graffiti: resolve(__dirname, 'graffiti.html'),
        lyricsGame: resolve(__dirname, 'lyrics-game.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});
