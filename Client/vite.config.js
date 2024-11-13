import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api/users':{
        target:"http://localhost:8000",
        changeOrigin:true,
        secure:true
      },
      '/api/artists':{
        target:"http://localhost:8000",
        changeOrigin:true,
        secure:true
      },
      '/api/images':{
        target:"http://localhost:8000",
        changeOrigin:true,
        secure:true
      },
      '/api/movies':{
        target:"http://localhost:8000",
        changeOrigin:true,
        secure:true
      }
    }
  }
})
