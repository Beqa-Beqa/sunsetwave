import "./GlitchingButton.css";

type GlitchingButtonProps = {
	text: string;
	onClick?: () => void;
	className?: string;
	borderless?: boolean;
};

export default function GlitchingButton(props: GlitchingButtonProps) {
	const { text, onClick, className, borderless } = props;

	return (
		<button
			style={{
				background: !borderless
					? "linear-gradient(45deg, transparent 5%, var(--primary-color) 5%)"
					: undefined,
			}}
			onClick={onClick && onClick}
			className={`${className && className} ${
				!borderless &&
				"bg-[linear-gradient(45deg, transparent 5%, var(--primary-color) 5%)] text-white shadow-[6px_0px_0px_#00e6f6]"
			} text-primary-color button-glitch cursor-pointer`}
		>
			{text}
		</button>
	);
}
