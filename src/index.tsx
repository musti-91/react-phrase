/**
 * @class InitComponent
 */

import * as React from "react";

export type Props = { text: string };

export default class InitComponent extends React.Component<Props> {
	render() {
		const { text } = this.props;

		return <div>Example Component: {text}</div>;
	}
}
