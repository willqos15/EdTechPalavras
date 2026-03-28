import { defineConfig} from 'vite'
import type { Plugin } from "vite"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from "vite-plugin-singlefile"
import { Buffer } from "node:buffer"


function autoEncodeArrays(): Plugin {
  return {
    name: "auto-encode-arrays", 
    apply: "build",

    
    transform(code: string, id: string) {
      

        if (!/\.(ts|js|tsx|jsx)$/.test(id)) {
    return null
  }

 

      const regex = /\[(?:[^[\]]|\[[^[\]]*\])*\]/g

      const newCode = code.replace(
        regex,
        
        (match: string, array: string) => {

          try {

            if (array.includes("<")) return match

         if (!array.trim().startsWith("[")) return match
    if(!array.includes("{")) return match

            const parsed = eval(array)

            if (!Array.isArray(parsed) || parsed.length < 3)
              return match

            const base64 = Buffer
              .from(JSON.stringify(parsed))
              .toString("base64")

              

            return `JSON.parse(new TextDecoder().decode(Uint8Array.from(atob("${base64}"),c=>c.charCodeAt(0))))`

          } catch {
            return match
          }

        }
      )


      if (newCode === code) return null
      return {
        code: newCode,
        map: null
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [ autoEncodeArrays(), 
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),tailwindcss(), 
    viteSingleFile(),

  ],

build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      mangle: true
    }
  }
})
