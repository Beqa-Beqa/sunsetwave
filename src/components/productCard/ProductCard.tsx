import "./productCard.css";

export default function ProductCard() {
	return (
		<div className="card">
			<div className="head">Window</div>
			<div className="content">
				This is a neobrutalist-style window with a button and space for
				any content you want!
				<br />
				<button className="button">Button</button>
			</div>
		</div>
	);
}
