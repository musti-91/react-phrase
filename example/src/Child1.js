import React, { useState } from "react";
import { useTranslate } from "react-phrase";

/**
 * @author
 * @function Child1
 **/
const en = {
	"Good morning": "Good morning"
};

const es = {
	"Good morning": "Buenos días"
};
const Child1 = () => {
	const [lang] = useState("es");
	const translate = useTranslate({ en, es }, lang);

	return <div>{translate("Good morning")}</div>;
};

export default Child1;
