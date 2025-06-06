import { useRef, useState } from "react";

type SoundButtonProps = {
	audioSrc: string;
    className?: string;
};

export default function SoundButton(props: SoundButtonProps) {
	const { audioSrc, className } = props;

	const soundRef = useRef<HTMLAudioElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleClick = () => {
		if (soundRef.current) {
			!isPlaying ? soundRef.current.play() : soundRef.current.pause();
			setIsPlaying((prev) => !prev);
		}
	};

	return (
		<div>
			<button
				onClick={handleClick}
				className={`${className && className} cursor-pointer bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold rounded-lg shadow-lg hover:scale-110 transition-transform`}
			>
				{!isPlaying ? "▶️ Play Synth" : "⏹️ Stop Synth"}
			</button>
			<audio ref={soundRef} id="bg-audio" loop>
				<source src={audioSrc} type="audio/mpeg" />
			</audio>
		</div>
	);
}
