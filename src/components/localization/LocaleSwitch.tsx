import * as React from "react";
import useLocale, { locales } from "../../hooks/useLocale";

type LocaleSwitchProps = {};
export const LocaleSwitch = (props: LocaleSwitchProps) => {
	const [locale, setLocale] = useLocale();

	const toggleLocale = () => {
		const newLocale = locales[(locales.indexOf(locale) + 1) % locales.length];
		setLocale(newLocale);
	};

	return (
		<a onClick={toggleLocale}>{locale.toUpperCase()}</a>
	);
};
