import { Navbar, Body } from "../containers";

export default function Homepage() {

	return (
		<>
			<div>
				<div className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-20 z-50 bg-[url('/scanlines.jpg')] bg-repeat"></div>
				<div className="backdrop-brightness-25 relative pt-12 sm:pt-15 md:pt-18 bg-gradient-to-tr from-[#2c003e] via-[#8f2d56] to-[#270082]">
					<header>
						<Navbar />
					</header>
					<main>
						<Body />
					</main>
					<footer>
						{/* <Loader /> */}
					</footer>
				</div>
			</div>
		</>
	);
}
