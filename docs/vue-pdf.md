# 一、worker同源限制

worker在浏览器中有同源限制，new Worker()中的url参数必须与引入页面同源

```js
const w = new Worker(url) // url 必须要和页面同源
```

解决方案为，使用blob动态创建web worker

```js
const jsInWorker = 'let a = 123'
const newUrl = URL.createObjectURL(new Blob([jsInWorker]))
const w = new Worker(newUrl)
```

可以实现一个工具方法来动态引入外部的worker.js

```js
const url = 'xxx' // url 为非同源地址
function loadWorker (url) {
  const jsInWorker = `importScripts("${url}");`
  return URL.createObjectURL(new Blob([jsInWorker]))
}
const w = new Worker(loadWorker(url))
```

# 二、引入pdfjs后设置workerSrc

pdfjs默认处理了非同源使用blob来内敛引入pdf.worker.js，只需要设置GlobalWorkerOptions.workerSrc

```js
const PDFJS = require('pdfjs-dist/build/pdf.js')
PDFJS.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.min')
```

# 三、为依赖包打补丁（修改node_modules中的代码）

使用patch-package来修改node_modules中的代码

## 1、安装patch-package

```js
npm install patch-package -D
```

## 2、修改node_modules中的代码，比如vue-pdf中的代码

## 3、生成patches文件夹存储补丁

```js
npx patch-package vue-pdf
```

## 4、在package.js中的scripts配置脚本

配置postinstall可以在npm安装完包之后自动执行配置的脚本

```json
  "scripts": {
    "postinstall": "patch-package"
  },
```


*注意点：
### 1、node@12在使用patch-package@7+的时候因为引入的yaml包使用了高版本的js代码导致不兼容
```
有两种解决方法：
  1.升级node版本
  2.限制patch-package版本为<7
```

### 2、在docker的ci环境中会报错cannot run in wd
```
解决方法：
  配置.npmrc文件：unsafe-perm = true
```
