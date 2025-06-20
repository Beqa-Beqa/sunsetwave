import { useEffect, useState } from "react";
import LogoVice from "../../assets/logo-vice.png";
import { LuTreePalm } from "react-icons/lu";
import OffcanvasMenu from "../offcanvasMenu/OffcanvasMenu";
import { throttle } from "lodash";
import { GlitchingButton } from "../../components";
import { Link } from "react-router-dom";
import { ROUTES } from "../../enums/routes";

const SCROLL_THROTTLE_MS = 200;

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleNavbar, setToggleNavbar] = useState(true);

	useEffect(() => {
		let navbarToggleHandler = (() => {
			let prevScrollY = 0;

			return () => {
				if (window.scrollY > prevScrollY)
					setToggleNavbar(false);
				else setToggleNavbar(true);
				prevScrollY = window.scrollY;
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

				<div className="hidden lg:flex gap-10">
					<Link to={ROUTES.HOME}>
						<GlitchingButton
							borderless
							className="lg:h-[40px] lg:text-md"
							text="Home"
						/>
					</Link>
					<Link to={ROUTES.MENU}>
						<GlitchingButton
							borderless
							className="lg:h-[40px] lg:text-md"
							text="Menu"
						/>
					</Link>
					<Link to={ROUTES.GALLERY}>
						<GlitchingButton
							borderless
							className="lg:h-[40px] lg:text-md"
							text="Gallery"
						/>
					</Link>
					<Link to={ROUTES.LEGACY}>
						<GlitchingButton
							borderless
							className="lg:h-[40px] lg:text-md"
							text="Legacy"
						/>
					</Link>
					<Link to={ROUTES.LEADERBOARD}>
						<GlitchingButton
							borderless
							className="lg:h-[40px] lg:text-md"
							text="Leaderboard"
						/>
					</Link>
				</div>

				<button
					onClick={() => setToggleMenu(true)}
					type="button"
					className="lg:hidden h-full w-fit flex items-center gap-2"
				>
					<span className="text-primary-color">Menu</span>
					<span className="w-[25px] h-[25px] md:w-[40px] md:h-[40px]">
						<LuTreePalm className="cursor-pointer text-primary-color w-full h-full" />
					</span>
				</button>
			</nav>
			<OffcanvasMenu
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
			/>
		</>
	);
}
