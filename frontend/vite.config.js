

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'https://chat-app-0epu.onrender.com/',
        secure:false
      }
    }
  },
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://chat-app-0epu.onrender.com/', // Render ki jagah localhost karein
//         changeOrigin: true, // Ye line add karein, host header ko match karne ke liye
//         secure: false
//       }
//     }
//   },
// })
