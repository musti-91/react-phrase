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
			<button onClick={() => onLangChange()}>Spanish</button>
		</div>
	);
};

export default withTranslate(Child);
