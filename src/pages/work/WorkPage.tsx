import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import code from "../../assets/img/code.png";
import { Container } from "react-materialize";
import "./WorkPage.scss";

export const WorkPage = () => {
	return (
		<section id="work">
			<h2 className="theme-primary-text center">Our work</h2>
			<Container>
				<div style={{userSelect: "none"}}>
					<Carousel swipeable={true} emulateTouch={true} showStatus={false}>
						<div>
							<img src={code}/>
							{/*<p className="legend">Legend 1</p>*/}
						</div>
						<div>
							<img src={code}/>
							{/*<p className="legend">Legend 1</p>*/}
						</div>
					</Carousel>
				</div>
			</Container>
		</section>
	);
};
