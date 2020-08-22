import * as React from "react";
import { createRef, useEffect } from "react";
import "../../assets/img/logo.png";
import { Sidenav } from "./sidenav/Sidenav";
import "./Navbar.css";
// @ts-ignore
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import useLocale from "../../hooks/useLocale";
import { LocaleSwitch } from "../localization/LocaleSwitch";
import routes from "../../router/localization";
import { blogUrl } from "../../globals";


export const Navbar = () => {
	const [locale] = useLocale();

	const navRef = createRef<HTMLElement>();

	const menuItems = [
		<li key={0}><Link className="sidenav-close" to="/">{routes[locale].home}</Link></li>,
		<li key={1}><Link className="sidenav-close" to="/about">{routes[locale].about}</Link></li>,
		<li key={2}><Link className="sidenav-close" to="/team">{routes[locale].team}</Link></li>,
		<li key={3}><Link className="sidenav-close" to="/contact">{routes[locale].contact}</Link></li>,
		<li key={4}><a target="blank" className="sidenav-close" href={blogUrl}>{routes[locale].blog}</a></li>,
		<li key={5}><LocaleSwitch/></li>,
	];

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
				<ul className="menu right hide-on-med-and-down">
					{menuItems}
				</ul>
				<a href="#" data-target="sidenav" className="sidenav-trigger right"><i
					className="material-icons">menu</i></a>
			</div>
			<Sidenav menuItems={menuItems}/>

		</nav>);
};
