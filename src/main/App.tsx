import "./App.css";
import { Navbar, Body } from "../containers";

function App() {
	return (
		<div className="relative pt-12 sm:pt-15 md:pt-18 bg-gradient-to-tr from-[#2c003e] via-[#8f2d56] to-[#270082]">
			<header>
				<Navbar />
			</header>
			<main>
				<Body/>
			</main>
			<footer>

			</footer>
		</div>
	);
}

export default App;
