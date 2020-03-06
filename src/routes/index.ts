import { SignUp } from "../pages/sign-up/sign-up";
import { CurrentCoin } from "../pages/current-coin";
import { Profile } from "../pages/profile/index";
import { AuthRoute } from "../routes/AuthRoute";
import { IndexLayout } from '../layouts/index'
import { Login } from "../pages/login/login";
import { Home } from '../pages/index'

// type RoutesType = {
// 	path: string,
// 	component: object
// }

// type RoutesType = {
// 	path: string,
// 	component: object,
// 	component: jim,
// }

// type RoutesType = {
// 	path: string,
// 	component: object,
// 	component: jim,
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