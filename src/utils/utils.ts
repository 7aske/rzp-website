import React from "react";

export const scrollToTop = (ev?: React.MouseEvent<any, any>) => {
	if (ev) ev.preventDefault();
	window.scroll({top: 0, left: 0, behavior: "smooth"});
};

export const scrollTo = (ev?: React.MouseEvent<any, any>) => {
	if (!ev) return;
	ev.preventDefault();
	const url = new URL((ev.target as HTMLAnchorElement).href);
	const elemId = url.hash;
	const elem = document.querySelector(elemId);
	console.log(elemId, elem);
	if (!elem) return;
	elem.scrollIntoView({behavior: "smooth"});
};
