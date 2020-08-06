import { useCookies } from "react-cookie";

const defaultLocale = "en";
export const locales = ["en", "rs"];


const useLocale = () => {
	const [cookies, setCookie] = useCookies(["locale"]);

	if (!cookies.locale) {
		setCookie("locale", defaultLocale);
	}

	const locale = cookies.locale || defaultLocale;

	const setLocale = (_locale: string) => {
		if (locales.indexOf(_locale) !== -1)
			setCookie("locale", _locale);
	};

	return [locale, setLocale];
};

export default useLocale;
