# 代码开发规范

## EditorConfig

VSCode安装 EditorConfig for VS Code 扩展

## Prettier

1、VSCode安装 Prettier-Standard 扩展

2、配置VSCode默认格式化程序为 Prettier-Standard

`Ctrl + P` 输入 `>首选项 打开用户设置json` 回车

在VSCode设置json文件中配置以下内容：

```
  "editor.defaultFormatter": "numso.prettier-standard-vscode",
```

如果json文件中已有 `"[javascript]"` `"[vue]"` 等format配置，将其改成一样的值

老项目暂不允许打开 Format On Save 设置

3、配置格式化快捷键

`Ctrl + P` 输入 `>快捷键` 回车，搜索 `editor.action.formatDocument` 配置key值

## ESLint

VSCode安装 ESLint 扩展

## Vue代码编写规范（待补充...）

1、新页面都采用 `.vue` 单文件来开发，不再采用外部引入 `js` `css` 的方式拆分js和css

2、老页面不允许进行手动 Format 操作

3、`.vue` 中的 style 必须设置scoped属性

## 小程序代码编写规范（待补充...）

1、页面统一使用 ZpPage 来注册，组件统一使用 ZpComponent 来注册

2、全局数据管理和消息订阅使用 App.bus