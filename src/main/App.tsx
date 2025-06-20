import "./App.css";
import { Gallery, Homepage, Legacy, Menu, Leaderboard } from "../routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../enums/routes";
import { Provider } from "react-redux";
import store from "../store/store";
import Root from "../routes/Root";

const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <Root />,
		children: [
			{
				path: ROUTES.HOME,
				element: <Homepage />,
			},
			{
				path: ROUTES.MENU,
				element: <Menu />,
			},
			{
				path: ROUTES.GALLERY,
				element: <Gallery />,
			},
			{
				path: ROUTES.LEGACY,
				element: <Legacy />,
			},
			{
				path: ROUTES.LEADERBOARD,
				element: <Leaderboard />,
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
