import "./Carousel.css";

type CarouselPropsType = {
	srcCollection: string[];
	name: string;
};

export default function Carousel(props: CarouselPropsType) {
	const { srcCollection, name } = props;

	return (
		<div className="carousel w-full overflow-x-auto">
			<div className="flex items-center justify-between gap-4 px-4 py-2 min-w-max">
				{srcCollection.length
					? srcCollection.map((src, idx) => {
							return (
                                <div key={idx} className="bg-pink-600/20 p-1 rounded-xl shadow-md hover:shadow-[0_0_25px_#00ffe7,0_0_50px_#ff00f7] hover:scale-101 transition-all duration-300 ease-in-out h-62 w-[94vw] md:w-[47vw] xl:w-[23vw] overflow-hidden cursor-pointer">
                                    <img
                                        className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                                        src={src}
                                        alt="Carousel image"
                                    />
                                </div>
							);
					  })
					: null}
			</div>
		</div>
	);
}
