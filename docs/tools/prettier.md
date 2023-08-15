# 代码开发规范

## EditorConfig

VSCode 安装 EditorConfig for VS Code 扩展

## Prettier

1、VSCode 安装 Prettier-Standard 扩展

2、配置 VSCode 默认格式化程序为 Prettier-Standard

`Ctrl + P` 输入 `>首选项 打开用户设置json` 回车

在 VSCode 设置 json 文件中配置以下内容：

```
  "editor.defaultFormatter": "numso.prettier-standard-vscode",
```

如果 json 文件中已有 `"[javascript]"` `"[vue]"` 等 format 配置，将其改成一样的值

老项目暂不允许打开 Format On Save 设置

3、配置格式化快捷键

`Ctrl + P` 输入 `>快捷键` 回车，搜索 `editor.action.formatDocument` 配置 key 值

## ESLint

VSCode 安装 ESLint 扩展

## Vue 代码编写规范（更新...）

1、新页面都采用 `.vue` 单文件来开发，不再采用外部引入 `js` `css` 的方式拆分 js 和 css

2、单文件组件的文件名使用大驼峰命名（如：`JobItem.vue`），注册和使用组件使用和文件同名（如：`<JobItem></JobItem>`）

3、`.vue` 中的 style 必须设置 scoped 属性

## 小程序代码编写规范（更新...）

1、页面统一使用 ZpPage 来注册，组件统一使用 ZpComponent 来注册

2、全局数据管理和消息订阅使用 App.bus

## 页面样式规范-PCB

1、页面按钮 `button` 样式：

```
  el-button 按钮大小(size属性)：
    页面：size="default"（无需设置size）
    弹窗 dialog-含较多自定义内容：size="medium"
    弹窗 dialog-提示弹窗 or 单输入框弹窗：size="small"
    弹出框 popover-用于二次确认: size="mini"
```

2、页面加载动画 `v-loading` 指令放在组件的最外层 `div` 节点
