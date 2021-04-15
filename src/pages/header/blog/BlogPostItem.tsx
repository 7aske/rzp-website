import * as React from "react";
import "./BlogPostItem.scss";
import { blogUrl } from "../../../globals";
import { CollectionItem } from "react-materialize";

type BlogPostItemProps = {
	post: Post
};
export const BlogPostItem = ({post}: BlogPostItemProps) => {
	if (post == null)
		return BlogPostPlaceholder();
	return (
		<CollectionItem>
			<a target="blank" href={blogUrl + "/#/posts/" + post.postSlug}>{post.postTitle}</a>
		</CollectionItem>
	);
};

export const BlogPostPlaceholder = () => {
	return (
		<CollectionItem className="blogpost-placeholder">
			<div className="outer animate__animated animate__flash animate__delay-1s animate__slower animate__infinite">
				<div className="inner"/>
			</div>
		</CollectionItem>);
};
