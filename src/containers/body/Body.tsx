import RetrowaveBeach from "../../assets/Retrowave-beach-and-palms.jpg";
import ViceCityImage from "../../assets/hero-image-vice-city.png";
import { Carousel, SoundButton } from "../../components";
import SelfControl from "../../assets/Self-Control.mp3";

export default function Body() {
	const carouselSrcCollection = [
		RetrowaveBeach,
		RetrowaveBeach,
		RetrowaveBeach,
		RetrowaveBeach,
		RetrowaveBeach,
	];

	return (
		<div className="w-full">
            <div className="relative">
                <img
                    className="max-h-[400px] sm:max-h-[550px] md:max-h-[750px] w-full object-cover"
                    src={ViceCityImage}
                    alt="placeholder"
                />
                <div className="absolute bottom-5 w-full">
                    <SoundButton audioSrc={SelfControl} className="text-sm p-1 mx-auto block md:text-lg md:p-2 xl:text-2xl xl:p-2.5"  />
                </div>
            </div>
			<h2 className="my-4 text-center text-primary-color text-lg sm:text-xl md:text-2xl lg:text-3xl">
				Neon Nights, Infinite Vibes
			</h2>
			<Carousel srcCollection={carouselSrcCollection} name="" />
		</div>
	);
}
