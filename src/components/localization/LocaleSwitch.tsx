import * as React from "react";
import useLocale, { locales } from "../../hooks/useLocale";

export const LocaleSwitch = () => {
	const [locale, setLocale] = useLocale();
	const nextLocale = locales[(locales.indexOf(locale) + 1) % locales.length];

	const toggleLocale = () => {
		setLocale(nextLocale);
	};

	return (
		<a onClick={toggleLocale}>{nextLocale.toUpperCase()}</a>
	);
};
