import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        allowedHosts:  ['edilsky-sketches.test'], // Permetti solo questo host
        host: 'edilsky-sketches.test', // Il tuo dominio locale
        port: 5173, // La porta che preferisci
        strictPort: true, // Se true: se la porta 3000 è occupata Vite va in errore, anziché passare alla 3001
    },
});
