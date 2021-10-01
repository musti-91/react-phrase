import React from 'react'
import { Provider } from 'react-phrase'

import { Child } from './Child'

const en = {
	'welcome.morning': 'Good morning %{name}.',
}

const es = {
	'welcome.morning': 'Buenos días %{name}.',
}

export default function App() {
	return (
		<Provider phrases={{ en, es }}>
			<Child />
		</Provider>
	)
}
