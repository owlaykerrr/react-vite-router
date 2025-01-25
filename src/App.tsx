import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';


function LayoutWrapper() {
	
		<PageLayout>
			<Outlet/>
		</PageLayout>

	
}

const router = createBrowserRouter([
	{
		element: <LayoutWrapper />,
		children: publicRoutes,
	},
]);

function App() {

	return <RouterProvider router={router} /> 
}

export default App;
