/**
 * object of all translation files
 */
export interface Phrase {
	[key: string]: {
		[value: string]: string
	}
}

export interface ITranslateProvider {
	phrases: Phrase
	children: JSX.Element
	lang?: string
}

export interface ITranslateState {
	translate: (phrase: string) => string
	currentLanguage?: string
	onLanguageChange?: (key: string) => any
}
