// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import "tailwindcss-animated";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        
      },
});
