import main from "./MainPage";
import login from "./LoginPage";
import register from "./RegisterPage";



export const routes = [
	{ index: true, ...main},
	{ path: '/login', ...login},
	{ path: '/register', ...register}
];
