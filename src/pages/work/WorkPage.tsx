import React, { ReactNode } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import zen from "../../assets/img/projects/zenmasaza.com.png";
import zenBlog from "../../assets/img/projects/blog.zenmasaza.com.png";
import frigo from "../../assets/img/projects/frigonekretnine.com.png";
import { Container, MediaBox } from "react-materialize";
import "./WorkPage.scss";
import useLocale from "../../hooks/useLocale";
import localization from "./localization";

const images = [
	zen,
	zenBlog,
	frigo
]

export const WorkPage = () => {
	const [locale] = useLocale();

	const wrapImage = (src: any) => {
		return  <a target="_blank" href={src}><img src={src}/></a>
	}

	return (
		<section id="work">
			<h2 className="theme-primary-text center">{localization[locale].title}</h2>

			<Container>
				<div style={{userSelect: "none"}}>
					<Carousel autoPlay={false} swipeable={true} showStatus={false}>
						{images.map(wrapImage)}
					</Carousel>
				</div>
			</Container>
		</section>
	);
};
