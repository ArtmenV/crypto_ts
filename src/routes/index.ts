import { SignUp } from "../page/sign-up/sign-up";
import { CurrentCoin } from "../page/current-coin";
import { Profile } from "../page/profile/index";
import { AuthRoute } from "../routes/AuthRoute";
import { IndexLayout } from '../layouts/index'
import { Login } from "../page/login/login";
import { Home } from '../page/index'

// type RoutesType = {
// 	path: string,
// 	component: object
// }

export const routes = [
	{
		path: '/login',
		component: Login
	},
	{
		path: '/sign-up',
		component: SignUp
	},
	{
		path: '*',
		component: '<div>Page not found...</div>'
	}
	];

export const authRoutes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/profile',
		component: Profile
	}
];