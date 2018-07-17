import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/index'
import Page1 from '@/components/page1/index'
import Page2 from '@/components/page2/index'
import Login from '@/components/login/index'

let routes = [
	{
		path: '/',
      	name: '主页',
      	component: HomePage,
      	children: [
      		{
      			path: '/page1',
      			name: 'page1',
      			component: Page1
      		},
      		{
      			path: '/page2',
      			name: 'page2',
      			component: Page2
      		}
      	]
	},
	{
		path: '/login',
		name: '登录',
		component: Login
	}
]
export default routes
