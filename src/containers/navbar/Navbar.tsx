import Logo from "../../assets/Sunsetwave-Logo.png";

export default function Navbar() {
	return (
		<nav className="h-[40px] sm:h-[45px] md:h-[50px] border-4">
			<div className="h-full">
				<img className="h-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] w-full" src={Logo} alt="Dreamwave logo" />
			</div>
		</nav>
	);
}
