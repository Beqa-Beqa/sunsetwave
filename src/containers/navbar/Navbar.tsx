import { useState } from "react";
import Logo from "../../assets/Sunsetwave-Logo.png";
import { VscMenu } from "react-icons/vsc";
import OffcanvasMenu from "../offcanvasMenu/OffcanvasMenu";

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<>
			<nav
				className="fixed top-0 left-0 w-full z-50 
    bg-white/40 backdrop-blur-md border-b border-white/20 
    shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
    h-[40px] sm:h-[50px] md:h-[60px] 
    flex items-center justify-between ps-2 pe-4"
			>
				<div className="h-full">
					<img
						className="cursor-pointer h-full max-w-[150px] sm:max-w-[300px] md:max-w-[400px] w-full"
						src={Logo}
						alt="Retrowave logo"
					/>
				</div>
				<div className="h-full w-[25px]">
					<VscMenu onClick={() => setToggleMenu(true)} className="cursor-pointer text-primary-color w-full h-full" />
				</div>
			</nav>
			<OffcanvasMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
		</>
	);
}
