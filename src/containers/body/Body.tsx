import PlaceholderImage from "../../assets/placeholder-image.png";
import RetrowaveBeach from "../../assets/Retrowave-beach-and-palms.jpg";
import Carousel from "../../components/carousel/Carousel";

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
            <img className="max-h-[400px] sm:max-h-[550px] md:max-h-[750px] w-full object-cover" src={PlaceholderImage} alt="placeholder" />
            <h2 className="my-4 text-center text-primary-color text-2xl md:text-4xl">Your Text Here</h2>
            <Carousel srcCollection={carouselSrcCollection} name="" />
        </div>
  );
}
