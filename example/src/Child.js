import React from "react";
import { withTranslate } from "react-phrase";
/**
 * @author
 * @function Child
 **/

const Child = ({ translate, onLangChange }) => {
	return (
		<div>
			<h2>{translate("Good morning")}</h2>
			<a onClick={() => onLangChange()}>Spanish</a>
		</div>
	);
};

export default withTranslate(Child);
