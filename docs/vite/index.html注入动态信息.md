# index.html注入动态信息

## 1、npm安装 vite-plugin-html

```
npm i -D vite-plugin-html
```

## 2、配置 vite.config.js

```js
// vite.config.js
import { createHtmlPlugin } from 'vite-plugin-html'
export default defineConfig(({ mode }) => {return {
    plugins: [
      createHtmlPlugin({
        minify: true,
        entry: 'src/main.js',
        template: 'index.html',
        inject: {
          data: {
            injectScript: `<script src="动态地址"></script>`,
          },
        },
      }),
    ],
  }
})
```

## 3、在 index.html 文件中注入字段

```html
<%- injectScript %>
```