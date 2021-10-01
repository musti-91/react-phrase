import React from 'react'
import { ITranslateProvider, ITranslateState, Phrase } from './types'
import * as Polyglot from 'node-polyglot'

const TranslationContext = React.createContext({})

const STORAGE_KEY = 'LANGUAGE'
const polyglot = new Polyglot({ phrases: {} })

const getLocale = (() => {
	return localStorage.getItem(STORAGE_KEY) ?? polyglot.locale()
})()

const getLangPhrases = (phrases: Phrase, lang: string) => {
	if (Object.keys(phrases).length <= 1) {
		throw new Error('No phrases have been defined, Or one language provided')
	} else if (lang in phrases) {
		return phrases[lang]
	}
	return
}

/**
 * getTranslation function
 */
export const getTranslate = (phrases: Phrase) => {
	const dictionary = getLangPhrases(phrases, getLocale)
	polyglot.replace(dictionary)
	polyglot.locale(getLocale)
	return polyglot.t.bind(polyglot)
}

export function Provider({ phrases, lang, children }: ITranslateProvider) {
	const [currentLang, setCurrentLang] = React.useState(lang ?? getLocale)

	const onLanguageChange = (key: string) => {
		const foundPhrases = Object.keys(phrases).find(k => key === k)

		if (foundPhrases !== undefined) {
			setCurrentLang(key)
			localStorage.setItem(STORAGE_KEY, key)
		} else {
			throw Error(
				`Cannot find ${key} phrases! Are you sure the phrases key already exist?`
			)
		}
	}

	React.useEffect(() => {
		const dictionary = getLangPhrases(phrases, currentLang)
		polyglot.replace(dictionary)
		polyglot.locale(currentLang)
	}, [currentLang])

	return (
		<TranslationContext.Provider
			value={{
				onLanguageChange,
				currentLanguage: currentLang ?? getLocale,
				translate: getTranslate(phrases),
			}}
		>
			{children}
		</TranslationContext.Provider>
	)
}

export const withTranslate = (Component: any) => (passedProps: any) => (
	<TranslationContext.Consumer>
		{(translateProps: ITranslateState) => (
			<Component {...translateProps} {...passedProps}>
				{passedProps.children}
			</Component>
		)}
	</TranslationContext.Consumer>
)
