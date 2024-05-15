### 问题来源：国内使用npm安装node-sass时主要是由于node-sass需要在github上拉取文件，而国内是无法稳定连接github的。
当github上无法拉去文件时，将会转为使用node在本地编译，这时会需要用到python，而非python相关使用者一般都会报错，报错内容与gyp和python相关。


# 离线安装：
## 1.根据系统版本找到对应包
## 2.npm install --sass-binary-path="E:\code\win32-x64-72_binding.node"
## 3.将文件重命名为binding.node拷贝到node_modules\node-sass\vendor\win32-x64-72\binding.node

在线安装：
使用dart-sass替换node-sass