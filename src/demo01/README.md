# React模块中书写CSS
在开发React的时候就发现这个问题,如何去组件化得管理CSS,而不是将CSS全局地引入到整个项目中,于是发现了CSS-Modules.
## 实际运用
> 项目由create-react-app构建
初始化项目后执行
``` shell
npm run eject
```
将webpack配置文件导出,并找到 _webpack.config.dev.js_ 中的 `module` 模块
``` javascript
{
    loader: require.resolve('css-loader'),
    options: {
          modules: true,   // 新增对css modules的支持
          localIdentName: '[name]__[local]__[hash:base64:5]', //设置文件编码
          importLoaders: 1,
    },
}
```
## CSS-Modules书写方法
``` css
/* style.css */
.wrap {
    width: 100%;
    background: grey;
}
.banner {
    width: 1100px;
    margin: 0 auto;
    position: relative;
}
.bannerBox {
    width: 1100px;
    height: 420px;
}
.bannerBox img {
    width: 100%;
    height: 100%;
}

```
``` js
    /* Component.jsx */
    import styles from 'style.css'

    return `<div className=${styles.wrap}></div>`
```
将 `styles.css` 用 `styles` 来引用,使用时就像用对象的方法去定义`className`
## 多个className如何共存
这里可以使用`classnames` 库[classnames NPM](https://www.npmjs.com/package/classnames)
> 使用方法
``` js
import classNames from 'classnames'
/* style.css */
import styles from 'style.css'

class Example extends React.Component {
// ... 
  render () {
    var exClass = classNames({
      [styles.wrap]: true,
      [styles.banner]: this.state.isPressed,
    });
    return `<div className={exClass}>{this.props.label}</div>`;
  }
}
```
## 定义全局属性
``` css
:global(.add) {
    height: 100px;
    width: 100px
}
```
使用 `:global` 包裹 `class` 即可定义为全局class,这将不会解析.
## 如何复用样式
对于样式复用，CSS Modules 只提供了唯一的方式来处理：composes 组合
``` css
.root {
    border: 1px solid red
}
.child {
    composes: root;/* 复用的class */
    color: green; /* 自己的样式 */
}
```
生成的HTML为
``` html
<span class="demo__child__2M1Lg demo__root__2N9WP">span</span>
```
## 输入变量
CSS-Modules 支持使用变量,但是需要安装`PostCSS`和`postcss-modules-values`.在`create-react-app`脚手架中,已经预装好,可以直接用.

在`style.css`中定义变量
``` css
@value blue: #0c77f8;
@value red: #ff0000;
@value green: #aaf200;
```
在`***.css`中引用变量
``` css
@value colors: "./colors.css";
@value blue, red, green from colors;

.title {
  color: red;
  background-color: blue;
}
```