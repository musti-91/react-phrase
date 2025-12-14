import * as React from "react"
import { TranslationContext } from "./Provider"

export interface Translate {
	phrase: string
	options?: {
		[prop: string]: any
	}
}

export default (Component: any) => (props: any) => (
	<TranslationContext.Consumer>
		{(translate: Translate) => (
			<Component translate={translate} {...props}></Component>
		)}
	</TranslationContext.Consumer>
)
