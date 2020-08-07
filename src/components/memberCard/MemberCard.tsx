import * as React from "react";
import { createRef, useEffect } from "react";
import useLocale from "../../hooks/useLocale";
import localization from "./localization";
import "./MemberCard.css";

type MemberCardProps = {
	member: Member
};
export const MemberCard = ({member: {about, firstName, lastName, picture, role, socialMedia}}: MemberCardProps) => {
	const [locale] = useLocale();
	const modalRef = createRef<HTMLDivElement>();
	const modalId = btoa(Math.random().toString());

	useEffect(() => {
		if (modalRef.current) M.Modal.init(modalRef.current, {});
	}, []);

	return (
		<div className="col s12 m12 l6">
			<div className="member-card card">
				<div className="card-image">
					<img src={picture} alt="Profile picture"/>
				</div>
				<div className="card-content">
					<h5 className="name">{firstName} {lastName}</h5>
					<h6 className="role">{role[locale]}</h6>
				</div>
				<div className="card-action">
					<button data-target={modalId}
					        className="more btn btn-flat modal-trigger">{localization[locale].more}</button>
				</div>
			</div>

			<div ref={modalRef} id={modalId} className="modal member-modal modal-fixed-footer">
				<div className="modal-content">
					<div className="row">
						<div className="col s12 m12 l4">
							<img src={picture} alt="Profile picture"/>
						</div>
						<div className="col s12 m12 l8">
							<h4>{firstName} {lastName}</h4>
							<p>{about[locale]}</p>
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
