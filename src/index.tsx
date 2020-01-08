import { default as TranslationProvider } from "./Provider";
import { default as withTranslation, Translate } from "./withTranslate";
import { Phrase } from "./helper";
import getTranslate, { getLocale } from "./i18n";

export default TranslationProvider;

export const withTranslate = withTranslation;

export const useTranslation = (phrases: Phrase, lang?: string) =>
	getTranslate(phrases, lang ? lang : getLocale) as Translate;

export const locale = getLocale;
