import * as React from "react";
import { useEffect, useState } from "react";
import { BlogPostItem } from "./BlogPostItem";
import localization from "./localization";
import useLocale from "../../../hooks/useLocale";
import { Collection, CollectionItem } from "react-materialize";

type BlogPostListProps = {
	title: string;
	service: (params: any) => Promise<Post[]>
};
export const BlogPostList = ({title, service}: BlogPostListProps) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [locale] = useLocale();
	const postCount = 5;
	const getPosts = () => {
		setPosts(new Array(postCount).fill(null));
		service({count: postCount}).then(newPosts => {
			setPosts(newPosts);
		}).catch(err => {
			console.error(err);
			setPosts([]);
		});
	};

	useEffect(() => getPosts(), []);

	return (
		<Collection className="with-header animate__animated animate__slideInRight animate__fast">
			<li className="collection-header">{title}</li>
			{posts.map((post, i) => <BlogPostItem key={i} post={post}/>)}
			<CollectionItem>{posts.length === 0 ? localization[locale].noNewPosts : ""}</CollectionItem>
		</Collection>
	);
};
