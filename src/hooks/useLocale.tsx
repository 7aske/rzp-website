import { useCookies } from "react-cookie";

export const defaultLocale = "en";
export const locales = ["en", "sr"];
export const localeCookieName = "locale";

const useLocale = () => {
	const [cookies, setCookie] = useCookies([localeCookieName]);

	if (!cookies.locale || locales.indexOf(cookies.locale) === -1) {
		setCookie(localeCookieName, defaultLocale);
	}

	const locale = cookies.locale || defaultLocale;

	const setLocale = (_locale: string) => {
		if (locales.indexOf(_locale) !== -1)
			setCookie(localeCookieName, _locale);
	};

	return [locale, setLocale];
};

export default useLocale;
