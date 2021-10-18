import React, { useState } from 'react';

const Task2 = () => {

	const [value, setValue] = useState("");

	const addToValue = (numberToAdd) => {

		const numb = value + numberToAdd;

		return numb;

	}

	setValue(1);

	const number = addToValue(4);

}

export default Task2;