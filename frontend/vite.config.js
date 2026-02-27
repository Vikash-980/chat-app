import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Render ki jagah localhost karein
        changeOrigin: true, // Ye line add karein, host header ko match karne ke liye
        secure: false
      }
    }
  },
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
//     proxy:{
//       '/api':{
//         target:'https://slrtech-chatapp.onrender.com/',
//         secure:false
//       }
//     }
//   },
// })
