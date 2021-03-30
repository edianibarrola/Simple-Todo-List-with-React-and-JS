import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [inputValue, setInputValue] = useState("");
	const handleInputChange = input => {
		setInputValue(input);
	};
	return (
		<input
			type="text"
			onChange={e => handleInputChange(e.target.value)}
			value={inputValue}></input>
	);
}
