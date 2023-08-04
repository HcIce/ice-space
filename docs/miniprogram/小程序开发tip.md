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