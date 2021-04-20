import * as React from "react";
import { createRef, useEffect, useRef } from "react";
import * as M from "materialize-css";
import "./Sidenav.scss";
// @ts-ignore
import logo from "../../../assets/img/logo.png";
import { email } from "../../../globals";

type SidenavProps = {
	menuItems: JSX.Element[];
};

export const Sidenav = (props: SidenavProps) => {
	const sidenavRef = createRef<HTMLUListElement>();
	const sidenavInstance = useRef<M.Sidenav>();

	useEffect(() => {
		if (sidenavRef.current)
			sidenavInstance.current = M.Sidenav.init(sidenavRef.current, {draggable: false, edge: "right"});
	}, [sidenavRef]);

	return (
		<div>
			<ul ref={sidenavRef} id="sidenav" className="sidenav">
				<li>
					<div className="user-view">
						<a className="logo sidenav-close" href="#">
							<img src={logo} alt="Logo"/>
						</a>
						<a className="name" href={`mailto:${email}`}>
							Digitize.rs
						</a>
						<a className="email" href={`mailto:${email}`}>
							{email}
						</a>
					</div>
				</li>
				{props.menuItems}
			</ul>
		</div>
	);
};
