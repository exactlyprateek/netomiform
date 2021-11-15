import React, { useEffect, useState } from 'react';
import { Select, Container, Heading, Input, Text, Button } from '@chakra-ui/react';
import isEmail from 'validator/lib/isEmail';

// import {  } from 'postcss';

export default function Form() {
	const [ countriesData, setCountriesData ] = useState([]);
	const [ states, setStates ] = useState([]);
	const [ state, setState ] = useState('');
	const [ country, setCountry ] = useState('');
	const [ countryId, setCountryId ] = useState(0);
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ contact, setContact ] = useState('');
	const [ date, setDate ] = useState(new Date().toISOString().split('T')[0]);
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json').then(res =>
			res.json().then(res => setCountriesData(res))
		);
		let data = JSON.parse(localStorage.getItem('valid'));

		console.log(data);
		setState(data.state);
		setCountry(data.country);
		setCountryId(Math.abs(data.countryId));
		setUsername(data.username);
		setEmail(data.email);
		setContact(data.contact);
		// console.log(abc);
	}, []);
	useEffect(
		() => {
			if(countriesData.length > 0){

				setCountry(countriesData[countryId].name);
				setState(countriesData[countryId].states[0].name);
			}
		},
		[ countryId ]
	);
	function setCurrntCountry(params) {
		// console.log(countriesData[params.target.value]);
		setCountry(countriesData[params.target.value].name);
		setStates(countriesData[params.target.value].states);
	}
	function validateForm(e) {
		e.preventDefault();

		localStorage.setItem('valid', JSON.stringify({ username, email, contact, state, country, countryId }));
		// if (username.length < 4 || username.length > 10) {
		// 	// setValidator({ ...validator, name: 'Length should be between 4-10 characters.' });
		// 	localStorage.setItem('valid', JSON.stringify({ ...obj, name: false }));
		// 	// console.log(validator);
		// } else {
		// 	localStorage.setItem('valid', JSON.stringify({ ...obj, name: true }));
		// }

		// if (isEmail(email)) {
		// 	localStorage.setItem('valid', JSON.stringify({ ...obj, email: true }));
		// } else {
		// 	localStorage.setItem('valid', JSON.stringify({ ...obj, email: false }));
		// }
		// if (number.length !== 10) {
		// 	localStorage.setItem('valid', JSON.stringify({ ...obj, contact: false }));
		// } else {
		// 	localStorage.setItem('valid', JSON.stringify({ ...obj, contact: false }));
		// }
		window.location.reload();
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
					value={contact}
					onChange={e => setContact(e.target.value)}
				/>
				<Heading my="1" pt="1" fontSize="sm">
					Country
				</Heading>{' '}
				<Select rounded="md" size="sm" bg="white" onChange={setCurrntCountry}>
					{countriesData.map((country, idx) => <option value={idx}>{country.name}</option>)}
				</Select>
				{states.length > 0 ? (
					<React.Fragment>
						<Heading my="1" pt="1" fontSize="sm">
							State
						</Heading>
						<Select rounded="md" size="sm" bg="white">
							{states.map((state, idx) => <option value={idx}>{state.name}</option>)}
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
