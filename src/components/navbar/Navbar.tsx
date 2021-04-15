import * as React from "react";
import { createRef, useEffect } from "react";
import "../../assets/img/logo.png";
import { Sidenav } from "./sidenav/Sidenav";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import { useLocation } from "react-router-dom";
import useLocale from "../../hooks/useLocale";
import { LocaleSwitch } from "../localization/LocaleSwitch";
import routes from "../../router/localization";
import { blogUrl } from "../../globals";
import Scrollspy from "react-scrollspy";
import {scrollTo} from "../../utils/utils";


export const Navbar = () => {
	const [locale] = useLocale();
	const location = useLocation();

	const navRef = createRef<HTMLElement>();

	const menuItems = [
		<li key={0}><a className="sidenav-close" onClick={scrollTo} href="#header">{routes[locale].home}</a></li>,
		<li key={1}><a className="sidenav-close" onClick={scrollTo} href="#about">{routes[locale].about}</a></li>,
		<li key={2}><a className="sidenav-close" onClick={scrollTo} href="#team">{routes[locale].team}</a></li>,
		<li key={3}><a className="sidenav-close" onClick={scrollTo} href="#contact">{routes[locale].contact}</a></li>,
		<li key={4}><a target="blank" className="sidenav-close" href={blogUrl}>{routes[locale].blog}</a></li>,
		<li key={5}><LocaleSwitch/></li>,
	];
	const scrollSpyItems = ["header", "about", "team", "contact"];

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scroll = window.scrollY;
			if (!navRef.current)
				return;
			const offset = parseFloat(getComputedStyle(document.body, null).fontSize) * 3;

			if (scroll > navRef.current!.offsetHeight + offset) {
				navRef.current.classList.add("fixed");
			} else if (scroll <= offset) {
				navRef.current.classList.remove("fixed");
			}
		});

		// eslint-disable-next-line
	}, []);

	return (
		<nav ref={navRef} id="nav">
			<div className="spacer"/>
			<div className="menu container">
				<a href="#" className="nav-logo"><img src={logo} alt="Logo"/></a>
				<Scrollspy items={scrollSpyItems}
				           currentClassName={"current"}
				           className="menu right hide-on-med-and-down">
					{menuItems}
				</Scrollspy>
				<a href="#" data-target="sidenav" className="sidenav-trigger right"><i
					className="material-icons">menu</i></a>
			</div>
			<Sidenav menuItems={menuItems}/>

		</nav>);
};
