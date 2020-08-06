import * as React from "react";
import "./Header.css";
import useLocale from "../../hooks/useLocale";
import localization from "./localization";
import { BlogPostList } from "./blog/BlogPostList";
import * as blogService from "../../services/blog";

type HeaderProps = {};
export const Header = (props: HeaderProps) => {

	const [locale] = useLocale();

	return (
		<div id="header" className="container">
			<div className="row">
				<div className="col s12 m12 l7 animate__animated animate__slideInLeft animate__fast">
					<h4 className="title">
						{localization[locale].title}
					</h4>
					<p className="text">
						{localization[locale].text}
					</p>
				</div>
				<div className="col s12 m12 l5">
					<BlogPostList title={localization[locale].latestPosts} service={blogService.getLatestPosts}/>
				</div>
			</div>
		</div>
	);
};
