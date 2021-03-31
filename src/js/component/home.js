import React, { useState } from "react";

//create your first component
export function Home() {
	const [inputValue, setInputValue] = useState("");
	const [myList, setMyList] = useState([]);
	const handleInputChange = input => {
		setInputValue(input);
	};
	const addToList = e => {
		if (e.key == "Enter" && inputValue != null) {
			setMyList(
				myList.concat({
					label: inputValue,
					done: false
				})
			);
			console.log(myList);
			setInputValue("");
		}
	};
	const removeFromList = index => {
		let newList = myList.filter((item, i) => index != i);
		setMyList(newList);
	};
	return (
		<div>
			<div className="listContainer">
				<h1>Wife-I</h1>
				<h3>
					{myList.length > 0
						? "Do these things before she gets mad"
						: "Your wife is waiting to give you tasks..."}
				</h3>
				<input
					type="text"
					onChange={e => handleInputChange(e.target.value)}
					value={inputValue}
					onKeyPress={e => addToList(e)}></input>

				<ul className="list-unstyled">
					{myList.map((item, index) => (
						<li key={index}>
							{item.label}
							<button
								className="deleteIcon"
								onClick={() => removeFromList(index)}>
								X
							</button>
						</li>
					))}
					<li className="text-center">
						<h4 className="mx-auto">
							{myList.length > 0
								? `${myList.length} thing(s) left to do...`
								: "She's waiting..."}
						</h4>
					</li>
				</ul>
			</div>
		</div>
	);
}
