import * as Polyglot from "node-polyglot";

import { Phrase } from "../helper";

const polyglot = new Polyglot({ phrases: {} });

export const getLocale = (() => {
	if (navigator && navigator.languages && navigator.languages.length !== 0) {
		return navigator.languages[0].substring(0, 2);
	}
	return "en";
})();

const getDictionary = (phrases: Phrase, lang: string) => {
	if (Object.keys(phrases).length <= 1) {
		throw new Error("No phrases have been defined, Or one language provided");
	}

	return lang in phrases ? phrases[lang] : getLocale;
};

/**
 * getTranslation function
 */
export default (phrases: Phrase, lang: string) => {
	polyglot.replace(getDictionary(phrases, lang));
	polyglot.locale(lang);

	return polyglot.t.bind(polyglot);
};
