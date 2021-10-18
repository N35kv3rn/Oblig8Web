import React, { useState } from 'react';

const Task2 = () => {

	const [value, setValue] = useState(0);

	const addToValue = (numberToAdd) => {

		const numb = value + numberToAdd;

		return numb;

	}

	setValue(1);

	const number = addToValue(4);

	// - - - Test - - -

	const expectedNumber = 5;

	expect(number).toBe(expectedNumber);

}

export default Task2;