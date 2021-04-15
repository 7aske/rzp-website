import * as React from "react";
import { createRef, useEffect } from "react";
import useLocale from "../../hooks/useLocale";
import { SocialMediaIcon } from "../socialMediaIcon/SocialMediaIcon";
import localization from "./localization";
import "./MemberCard.scss";

type MemberCardProps = {
	member: Member
};
export const MemberCard = ({member: {about, firstName, lastName, email, picture, role, socialMedia}}: MemberCardProps) => {
	const [locale] = useLocale();
	const modalRef = createRef<HTMLDivElement>();
	const modalId = btoa(Math.random().toString());

	useEffect(() => {
		if (modalRef.current) M.Modal.init(modalRef.current, {});
	}, []);

	return (
		<div className="col s12 m12 l6 member-card">
			<div className="row animate__animated animate__fadeIn animate__slow">
				<div className="col s12 m5 l5">
					<div className="card-image">
						<img data-target={modalId} className="modal-trigger" src={picture} alt="Profile picture"/>
					</div>
				</div>
				<div className="col s12 m7 l7">
					<div className="card-content">
						<h5 className="name">{firstName}<br/>{lastName}</h5>
						<h6 className="role">{role[locale]}</h6>
						<div className="center">
							{socialMedia.sort((a, b) => a.type.localeCompare(b.type)).map(soc => <SocialMediaIcon socialMedia={soc}/>)}
						</div>
					</div>
					<div className="card-action">
						<button data-target={modalId}
						        className="more btn btn-flat modal-trigger right">{localization[locale].more}</button>
					</div>
				</div>
			</div>
			<div ref={modalRef} id={modalId} className="modal member-modal modal-fixed-footer">
				<div className="modal-content">
					<div className="row">
						<div className="col s12 m12 l4 card-image">
							<img src={picture} alt="Profile picture"/>
						</div>
						<div className="col s12 m12 l8 info">
							<h4>{firstName} {lastName}</h4>
							<h6><a className="email" href={"mailto:" + email}>{email}</a></h6>
							<h6>{role[locale]}</h6>
							<p>{about[locale]}</p>
							<div className="social-media">
								{socialMedia.length > 0 ? <h6>{localization[locale].socialMedia}</h6> : ""}
								{socialMedia.sort((a, b) => a.type.localeCompare(b.type)).map(soc => <SocialMediaIcon socialMedia={soc}/>)}
							</div>
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<button className="modal-close btn btn-flat">{localization[locale].close}</button>
				</div>
			</div>
		</div>
	);
};
