# webpack-html5
html5 多页应用打包脚手架工具

基于webpack的多页面打包工具
打包后每个h5页面对应一份js文件，一份css文件

使用方式：
1. git clone https://github.com/xmyxm/webpack-html5.git
2. npm install 
3. npm run build  打包页面
4. 使用 npm start 命令可以实时热替换，如果切页面开发看实时效果可使用此命令。

主要目的：边开发边看效果，适合设计稿切页面时使用。

开发方式：采用了webpack的webpack-dev-server组件做到代码的热更新，在前端切页面时及时查看效果。
