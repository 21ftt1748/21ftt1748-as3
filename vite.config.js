import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

// Initialization for ES Users
import {
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Ripple });
