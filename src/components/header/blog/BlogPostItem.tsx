import * as React from "react";
import "./BlogPostItem.css";

type BlogPostItemProps = {
	post: Post
};
export const BlogPostItem = ({post}: BlogPostItemProps) => {
	return (
		<li className="collection-item"><a target="blank" href={post.url}>{post.title}</a></li>
	);
};

export const BlogPostPlaceholder = () => {
	return <li className="collection-item blogpost-placeholder">
		<div className="outer animate__animated animate__flash animate__delay-1s animate__slower animate__infinite">
			<div className="inner"/>
		</div>
	</li>;
};
