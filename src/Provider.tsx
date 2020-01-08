import * as React from "react";

import getTranslate, { getLocale } from "./i18n";
import { Phrase } from "./helper";

export const TranslationContext = React.createContext({});

/**
 * Provider Types
 */
export interface iProvider {
	phrases: Phrase;
	children: any;
	lang?: string;
}

export default ({ phrases, lang, children }: iProvider) => (
	<TranslationContext.Provider
		value={getTranslate(phrases, lang ? lang : getLocale)}
	>
		{children}
	</TranslationContext.Provider>
);
