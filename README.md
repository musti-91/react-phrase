# react-phrase

> Internationalization for react apps

[![NPM](https://img.shields.io/npm/v/react-phrase.svg)](https://www.npmjs.com/package/react-phrase) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![demo](react-phrase.gif)

## [Demo](https://codesandbox.io/embed/vigilant-darkness-9fnwn?fontsize=14&hidenavigation=1&theme=dark)

## Install

```bash
npm install --save react-phrase
```

## Usage

### Provider

```tsx
import React, { Component } from "react";
import Provider from "react-phrase";

import Child from "./Child";

const en = {
	"Good morning": "Good morning"
};

const es = {
	"Good morning": "Buenos días"
};

export default class App extends Component {
	state = {
		lang: "en"
	};

	render() {
		const { lang } = this.state;
		return (
			<Provider phrases={{ en, es }} lang={lang}>
				<Child
					onLangChange={() =>
						this.setState({ lang: lang === "en" ? "es" : "en" })
					}
				/>
			</Provider>
		);
	}
}
```

#### Props

| prop    | type   | default |
| ------- | ------ | ------- |
| phrases | Object | {}      |
| lang    | string | en      |
|         |        |         |

### Child

`translate` function will be injected via `Props`

```tsx
import React from "react";
import { withTranslate } from "react-phrase";

interface Props {
	translate: (phrase: string, options?: any) => string;
	onLangChange: () => void;
}

const Child = ({ translate, onLangChange }: Props) => {
	return (
		<div>
			<h2>{translate("Good morning")}</h2>
			<button onClick={() => onLangChange()}>Spanish</button>
		</div>
	);
};

export default withTranslate(Child);
```

### Hooks

Without a Provider you could use `useTranslate` hook to get translate function

```jsx
import React, { useState } from "react";
import { useTranslate } from "react-phrase";

const en = {
	"Good morning": "Good morning"
};

const es = {
	"Good morning": "Buenos días"
};

const MyComponent = () => {
	const [lang] = useState("es");
	const translate = useTranslate({ en, es }, lang);

	return <div>{translate("Good morning")}</div>;
};

export default MyComponent;
```

#### `useTranslate` Props

| prop    | type   | default |
| ------- | ------ | ------- |
| phrases | Object | {}      |
| lang    | string | en      |
|         |        |         |

## License

MIT © [musti-91](https://github.com/musti-91)
