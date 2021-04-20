import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import zen from "../../assets/img/projects/zenmasaza.com.png";
import zenBlog from "../../assets/img/projects/blog.zenmasaza.com.png";
import frigo from "../../assets/img/projects/frigonekretnine.com.png";
import { Container } from "react-materialize";
import "./WorkPage.scss";
import useLocale from "../../hooks/useLocale";
import localization from "./localization";

const images = [
	{image: zen, href: "https://zenmasaza.com", text: "Zen masaža"},
	{image: zenBlog, href: "https://zenmasaza.com/blog", text: "Zen masaža Blog"},
	{image: frigo, href: "http://frigo.7aske.xyz", text: "Frigo Nekretnine"},
];

export const WorkPage = () => {
	const [locale] = useLocale();

	const wrapImage = (src: any) => {
		return <a target="_blank" href={src.image}>
			<a target="_blank" href={src.href} className="work-href">
				<i className="tiny material-icons">open_in_new</i>{src.href}
			</a>
			<img alt="Website image" src={src.image}/>
		</a>
			;
	};

	return (
		<section id="work">
			<h2 className="theme-primary-text center">{localization[locale].title}</h2>
			<Container>
				<div style={{userSelect: "none"}}>
					<Carousel autoPlay={false} swipeable={true} showStatus={false} showThumbs={true}>
						{images.map(wrapImage)}
					</Carousel>
				</div>
			</Container>
		</section>
	);
};
