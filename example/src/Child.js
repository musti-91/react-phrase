import React from "react";
import { withTranslate } from 'react-phrase'

export const Child = withTranslate(
	({ translate, onLanguageChange, currentLanguage }) => {
		const morning = translate('welcome.morning', { name: 'John' })

		return (
			<div>
				<h2>{morning}</h2>
				<h2>Current Language {currentLanguage}</h2>
				<button onClick={() => onLanguageChange('es')}>Change language</button>
			</div>
		)
	}
)
