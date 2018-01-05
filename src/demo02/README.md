# React-Router的实际运用
> 此处采用React-Router 4.0
 React Router DOM 已经 发布到 npm 因此你可以使用 npm 或者 yarn。

 ## 引用
 ### `react-router` 和 `react-router-dom`有什么区别?
 在 `React` 的使用中，我们一般要引入两个包，`react` 和 `react-dom`，那么 `react-router` 和 `react-router-dom` 是不是两个都要引用呢？
非也，坑就在这里。他们两个只要引用一个就行了，不同之处就是后者比前者多出了 `<Link>` `<BrowserRouter>` 这样的 `DOM` 类组件。
**因此我们只需引用** `react-router-dom` **这个包就行了**

 [what's the diff between react-router-dom & react-route`?](https://github.com/ReactTraining/react-router/issues/4648)

## 基本使用方法
``` js
 /* Router.js */
import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import { Home } from './Home'
import { About } from './About'
import { Mine } from './Mine'

export default class Root extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<Router>
					<div>
						<ul>
							<li><Link to="/">home</Link></li>
							<li><Link to="/about">about</Link></li>
							<li><Link to="/mine">mine</Link></li>
						</ul>
						<hr/>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/mine" component={Mine} />
					</div>
					
				</Router>
			</div>
		)
	}
}
```
其次是页面组件
``` js
/* Home.js */
import React from 'react'
export function Home() {
	return (
		<div>
			<h1>Page Home </h1>
		</div>
	)
}
``` 
## url与Component的匹配
`react-router` 根据 `url` 来判断加载相应的 `Component` 组件,其中,一般我们主页的 `url` 普遍都是 `/`,因此,需要在 `<Route>` 中加入 `exact` 关键字.作用为精确匹配 `url`.否则当地址为 `localhost:300/about` 时,会同时加载 `Home` 组件 和 `About` 组件.

在书写`Router`时要注意的一点是 `<Router></Router>` 标签内,只允许拥有一个子节点.如果包含多个子节点,项目就会报错.
<font color="#B22222">**A \<Router> may have only one child element**</font>

## Exclusive Routing
如果只想匹配一个route,可以使用 `<Switch>`
``` js
export default class Root extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props)
		return (
			<div>
				<Router>
					<div>
						<ul>
							<li><Link to="/">home</Link></li>
							<li><Link to="/about">about</Link></li>
							<li><Link to="/mine">mine</Link></li>
						</ul>
						<hr/>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/about/detail" component={Detail} />
							<Route path="/mine" component={Mine} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

const Detail = () => (
	<div>
		<h1>detail</h1>
	</div>
)
```
此时我们发现,组件并没有像我想象中的样子去渲染.尽管加上了 `<Switch>` 当我点击 `/about/detail` 时,仍然渲染的是 `about` 组件.这时,尝试一下,将 **/about/detail** 
和 **/about** 互换一下.可以发现组件正常渲染.除此之外,还可以加上 **exact**,此时,就不用去关心 **/about** 和 **/about/detail** 的前后位置.

## Redirect
> Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.
**渲染一个<Redirect>将导航到一个新的位置。 新位置将覆盖历史堆栈中的当前位置，例如服务器端重定向（HTTP 3xx）。**

