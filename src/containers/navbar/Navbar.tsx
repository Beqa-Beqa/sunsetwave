import { useEffect, useState } from "react";
import LogoVice from "../../assets/logo-vice.png";
import { LuTreePalm } from "react-icons/lu";
import OffcanvasMenu from "../offcanvasMenu/OffcanvasMenu";
import { throttle } from "lodash";

const SCROLL_THROTTLE_MS = 200;

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleNavbar, setToggleNavbar] = useState(true);

	useEffect(() => {
		let navbarToggleHandler = (() => {
			let prevPageYOffset = 0;

			return () => {
				if (window.pageYOffset > prevPageYOffset)
					setToggleNavbar(false);
				else setToggleNavbar(true);
				prevPageYOffset = window.pageYOffset;
			};
		})();

		navbarToggleHandler = throttle(navbarToggleHandler, SCROLL_THROTTLE_MS);

		window.addEventListener("scroll", navbarToggleHandler);

		return () => {
			window.removeEventListener("scroll", navbarToggleHandler);
		};
	}, []);

	return (
		<>
			<nav
				className={`fixed ${
					toggleNavbar
						? "top-0 pointer-events-auto opacity-100"
						: "-top-full pointer-events-none opacity-0"
				} transition-all left-0 duration-300 w-full z-50 
    bg-white/10 backdrop-blur-md border-b border-white/20 
    shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
    h-[40px] sm:h-[50px] md:h-[60px] 
    flex items-center justify-between ps-2 pe-4`}
			>
				<div className="h-full p-3">
					<img
						className="cursor-pointer h-full max-w-[150px] sm:max-w-[300px] md:max-w-[400px] w-full"
						src={LogoVice}
						alt="Retrowave logo"
					/>
				</div>
				<div className="h-full w-[25px]">
					<button
						className="w-full h-full"
						type="button"
						onClick={() => setToggleMenu(true)}
					>
						<LuTreePalm className="cursor-pointer text-primary-color w-full h-full" />
					</button>
				</div>
			</nav>
			<OffcanvasMenu
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
			/>
		</>
	);
}
