# 小程序开发tip

## 设置公司主题色

在page页面加入以下代码

```js
// js
import { setThemeColor } from '@utils/global'

async onload () {
  // ... other codes
  await setThemeColor.call(this, this.company_id)
}
```

## 小程序wxml文件内使用过滤器

```wxml
// wxml
<wxs src="../../../utils/tools.wxs" module="tools" />
```

## 引入iconfont

### 1.设置iconfont项目的字体格式为base64

### 2.下载至本地，提取文件夹中的css、ttf、woff、woff2文件到iconfont文件夹下

### 3.修改css文件：删除url()代码，修改后缀为scss（不支持sass的项目修改为wxss）