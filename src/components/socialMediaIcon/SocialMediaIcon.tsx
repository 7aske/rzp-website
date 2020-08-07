import * as React from "react";
import { createRef, useEffect } from "react";
import "./SocialMediaIcon.css";

type SocialMediaIconProps = {
	socialMedia: SocialMedia;
};
export const SocialMediaIcon = ({socialMedia: {type, url}}: SocialMediaIconProps) => {
	const iconRef = createRef<HTMLAnchorElement>();

	useEffect(() => {
		if (iconRef.current) M.Tooltip.init(iconRef.current, {
			position: "top",
			html: type.substring(0, 1).toUpperCase() + type.substring(1),
		});
	}, []);

	const iconClass = () => {
		switch (type) {
			case "facebook":
				return "fa-facebook-square";
			case "instagram":
				return "fa-instagram";
			case "linkedin":
				return "fa-linkedin-square";
			case "github":
				return "fa-github-square";
			case "website":
				return "fa-globe";
		}
	};

	return (
		<a ref={iconRef} className="social-media-icon tooltipped" target="blank"
		   href={url}><i className={"fa " + iconClass()}/></a>
	);
};
