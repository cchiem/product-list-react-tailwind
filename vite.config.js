import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://cchiem.github.io/product-list-with-cart-react-tailwind/",
});
