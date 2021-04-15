import * as React from "react";
import "./Header.scss";
import useLocale from "../../hooks/useLocale";
import localization from "./localization";
import { BlogPostList } from "./blog/BlogPostList";
import * as blogService from "../../services/blogService";
import { Row, Col, Container } from "react-materialize";

export const Header = () => {
	const [locale] = useLocale();

	return (
		<section id="header">
			<Container>
				<Row>
					<Col s={12} m={12} l={7} className="animate__animated animate__slideInLeft animate__fast">
						<h4 className="title">
							{localization[locale].title}
						</h4>
						<p className="text">
							{localization[locale].text}
						</p>
					</Col>
					<Col s={12} m={12} l={5}>
						<BlogPostList title={localization[locale].latestPosts} service={blogService.getLatestPosts}/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
