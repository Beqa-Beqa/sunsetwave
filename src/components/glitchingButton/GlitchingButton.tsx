import "./GlitchingButton.css";

type GlitchingButtonProps = {
    text: string;
    onClick: () => void
}

export default function GlitchingButton(props: GlitchingButtonProps) {
    const { text, onClick } = props;

	return <button onClick={onClick} className="button-glitch cursor-pointer">{text}</button>;
}
