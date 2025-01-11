import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';
import { AppHeader } from './components/app-header/app-header';
import { AppFooter } from './components/app-footer/app-footer';
import '@styles/index.scss'

function LayoutWrapper() {
	return <Outlet />;
}

const router = createBrowserRouter([
	{
		element: <LayoutWrapper />,
		children: publicRoutes,
	},
]);

function App() {
	return (
		<div className="app">
			<AppHeader />
			<RouterProvider router={router} />
			<AppFooter/>
		</div>
	);
}

export default App;
