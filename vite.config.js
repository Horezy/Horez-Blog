import { fileURLToPath, URL } from 'node:url'

// elementPlus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [
    vue(),
    // 配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        // 配置elementPlus采用sass样式配色系统
        importStyle: "sass"
      })],
    }),
  ],
  resolve: {
    alias: {
      //  意为将 ‘./src’ 相对路径转换为绝对路径的结果，即 ‘@’ 路径所对应的绝对路径。
      //  这样，就可以在模块中以 ‘@’ 代替 ‘./src’，来引用该路径下的文件或者目录。
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
        `,
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
