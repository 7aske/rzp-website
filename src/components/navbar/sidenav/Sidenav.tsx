import * as React from "react";
import { createRef, useEffect, useRef } from "react";
import * as M from "materialize-css";
import "./Sidenav.css";
// @ts-ignore
import logo from "../../../assets/img/logo.png";

type SidenavProps = {
	menuItems: JSX.Element[];
};

export const Sidenav = (props: SidenavProps) => {
	const sidenavRef = createRef<HTMLUListElement>();
	const sidenavInstance = useRef<M.Sidenav>();

	useEffect(() => {
		if (sidenavRef.current)
			sidenavInstance.current = M.Sidenav.init(sidenavRef.current, {draggable: true, edge: "right"});
	}, [sidenavRef]);

	return (
		<div>
			<ul ref={sidenavRef} id="sidenav" className="sidenav">
				<li>
					<div className="user-view">
						<a className="logo sidenav-close" href="#">
							<img src={logo} alt="Logo"/>
						</a>
						<a className="name">
							Company Name
						</a>
						<a className="email" href="mailto:company@gmail.com">
							company@gmail.com
						</a>
					</div>
				</li>
				{props.menuItems}
			</ul>
		</div>
	);
};
