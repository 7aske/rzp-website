import * as React from "react";
import { useEffect } from "react";
import { MemberCard } from "../../components/memberCard/MemberCard";
import { members } from "../../data/members";
import useLocale from "../../hooks/useLocale";
import { scrollToTop } from "../../utils/utils";
import localization from "./localization";
import "./TeamPage.scss";

export const TeamPage = () => {
	const [locale] = useLocale();

	useEffect(scrollToTop, []);

	return (
		<div id="team-page" className="container">
			<h2 className="title">{localization[locale].title}</h2>
			<div className="row">
				{members.sort(() => Math.random() - 0.5).map((member,i) => <MemberCard key={i} member={member}/>)}
			</div>
		</div>
	);
};
