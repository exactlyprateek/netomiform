import React, { useEffect, useState } from 'react';
import { Select, Container, Heading, Input, Text, Button } from '@chakra-ui/react';
// import {  } from 'postcss';

export default function Form({ validator, setValidator }) {
	const [ countriesData, setCountriesData ] = useState([]);
	const [ currentState, setCurrentState ] = useState([]);
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ number, setNumber ] = useState('');
	const [ date, setDate ] = useState(new Date().toISOString().split('T')[0]);
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json').then(res =>
			res.json().then(res => setCountriesData(res))
		);

		// console.log(abc);
	}, []);
	function setCurrntCountry(params) {
		// console.log(countriesData[params.target.value]);
		setCurrentState(countriesData[params.target.value].states);
	}
	function validateForm(e) {
		e.preventDefault();
		if (username.length < 4 || username.length > 10) {
			setValidator({ ...validator, name: 'Length should be between 4-10 characters.' });
			console.log(validator);
		}
	}
	return (
		<Container bg="gray.200" maxW="container.sm">
			<form>
				<Text>Can you please provide your personal details?</Text>
				<Heading my="1" pt="1" fontSize="sm">
					Name
				</Heading>
				<Input
					rounded="md"
					bg="white"
					size="sm"
					type="text"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<Heading my="1" pt="1" fontSize="sm">
					Date of Birth
				</Heading>
				<Input
					rounded="md"
					bg="white"
					size="sm"
					type="date"
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
				<Heading my="1" pt="1" fontSize="sm">
					Contact Number
				</Heading>
				<Input
					rounded="md"
					bg="white"
					type="number"
					size="sm"
					value={number}
					onChange={e => setNumber(e.target.value)}
				/>
				<Heading my="1" pt="1" fontSize="sm">
					Country
				</Heading>{' '}
				<Select rounded="md" size="sm" bg="white" onChange={setCurrntCountry}>
					{countriesData.map((country, idx) => <option value={idx}>{country.name}</option>)}
				</Select>
				{currentState.length > 0 ? (
					<React.Fragment>
						<Heading my="1" pt="1" fontSize="sm">
							State
						</Heading>
						<Select rounded="md" size="sm" bg="white">
							{currentState.map((state, idx) => <option value={idx}>{state.name}</option>)}
						</Select>
					</React.Fragment>
				) : null}
				<Heading my="1" pt="1" fontSize="sm">
					Your Email
				</Heading>
				<Input
					errorBorderColor="red.100"
					rounded="md"
					bg="white"
					size="sm"
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				{/* <Center */}
				<Button onClick={validateForm} my="2" colorScheme="teal" type="submit">
					Submit
				</Button>
			</form>
		</Container>
	);
}
