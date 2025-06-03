import { useEffect } from "react";
import ReactDOM from "react-dom";
import { GlitchingButton } from "../../components";

type OffcanvasMenuProps = {
	toggleMenu: boolean;
	setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OffcanvasMenu(props: OffcanvasMenuProps) {
	const { toggleMenu, setToggleMenu } = props;

    useEffect(() => {
        const noScrollClassName = 'scroll-disable';

        if(toggleMenu) document.body.classList.add(noScrollClassName);
        else document.body.classList.remove(noScrollClassName);

        return () => {
            document.body.classList.remove(noScrollClassName);
        }
    }, [toggleMenu]);

	const offcanvasMenu = (
		<div
			className={`z-50 fixed top-0 h-full w-full transition-all duration-300p-20 bg-white/40 backdrop-blur-md 
                ${!toggleMenu ? "-right-full" : "right-0"}`
            }
		>
            <GlitchingButton onClick={() => setToggleMenu(false)} text="Close" />
		</div>
	);

	return ReactDOM.createPortal(offcanvasMenu, document.body);
}
