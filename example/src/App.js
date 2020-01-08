import React, { Component, Fragment } from "react";
import { default as Provider } from "react-phrase";

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
			<Fragment>
				<Provider phrases={{ en, es }} lang={lang}>
					<Child
						onLangChange={() =>
							this.setState({ lang: lang === "en" ? "es" : "en" })
						}
					/>
				</Provider>
			</Fragment>
		);
	}
}
