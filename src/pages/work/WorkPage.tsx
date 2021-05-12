import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import zen from "../../assets/img/projects/zenmasaza.com.png";
import zenBlog from "../../assets/img/projects/blog.zenmasaza.com.png";
import frigo from "../../assets/img/projects/frigonekretnine.com.png";
import un1t from "../../assets/img/projects/un1tgroup.com.png";
import dobraCena from "../../assets/img/projects/www.dobracena.rs.png";
import { Container } from "react-materialize";
import "./WorkPage.scss";
import useLocale from "../../hooks/useLocale";
import localization from "./localization";

const images = [
	{image: zen, href: "https://zenmasaza.com", text: "Zen masaža"},
	{image: zenBlog, href: "https://zenmasaza.com/blog", text: "Zen masaža Blog"},
	{image: un1t, href: "https://un1tgroup.com", text: "UN1T Group"},
	{image: dobraCena, href: "https://dobracena.rs", text: "Dobra Cena"},
	{image: frigo, href: "http://frigo.7aske.xyz", text: "Frigo Nekretnine"},
];

export const WorkPage = () => {
	const [locale] = useLocale();

	const wrapImage = (src: any) => {
		return <a target="_blank" href={src.image} key={src}>
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
					<Carousel autoPlay={false} infiniteLoop={true} swipeable={true} showStatus={false} showThumbs={true}>
						{images.map(wrapImage)}
					</Carousel>
				</div>
			</Container>
		</section>
	);
};
