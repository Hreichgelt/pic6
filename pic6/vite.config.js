import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

// There seems to be some kind of issue with configuration here and I cannot find anything on Vite docs or anyting newer in forums. Seems 
// that everything is from at least a year ago. Going to need support with this one. 

// Env Variables#
// Vite exposes env variables on the special import.meta.env object. Some built-in variables are available in all cases:

// import.meta.env.MODE: {string} the mode the app is running in.

// import.meta.env.BASE_URL: {string} the base url the app is being served from. This is determined by the base config option.

// import.meta.env.PROD: {boolean} whether the app is running in production.

// import.meta.env.DEV: {boolean} whether the app is running in development (always the opposite of import.meta.env.PROD)

// import.meta.env.SSR: {boolean} whether the app is running in the server.