import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/tareas-app/", // <- reemplaza "tareas-app" por el nombre exacto de tu repo
  plugins: [react()],
});
  