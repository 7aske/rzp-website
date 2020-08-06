import * as React from "react";

type BlogPostItemProps = {
	post: Post
};
export const BlogPostItem = ({post}: BlogPostItemProps) => {
	return (
		<li className="collection-item"><a target="blank" href={post.url}>{post.title}</a></li>
	);
};
