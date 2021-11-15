import React, { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import isEmail from 'validator/lib/isEmail';

function Parent() {
	const [ data, setData ] = React.useState({});
	const [ result, setResult ] = useState({});
	const VALIDATOR = [
		{ field: 'state', validator: [ { required: true } ] },
		{ field: 'country', validator: [ { required: true } ] },
		{ field: 'contact', validator: [ { required: false } ] },
		{ field: 'email', validator: [ { required: false } ] },
		{ field: 'name', validator: [ { required: true } ] }
	];

	function validateForm() {
		setResult({});
		let errCount = 0;
		if (Object.keys(data).length > 0) {
			let obj = {};
			if ((data.username.length < 4 || data.username.length > 10) && data.username.length !== 0) {
				obj = { ...obj, Name: 'Length should be between 4-10 characters.' };
				errCount++;
			} else if (data.username.length === 0) {
				obj = { ...obj, Name: 'Required Field' };
				errCount++;
			}

			if (!isEmail(data.email)) {
				obj = { ...obj, Email: 'should be a valid email.' };
				errCount++;
			}
			if (data.contact.length !== 10) {
				console.log(data.contact.length);
				obj = { ...obj, Contact: 'mobile number should be of 10 digits.' };
				errCount++;
			}

			if (!data.country) {
				obj = { ...obj, Country: 'Required Field' };
				errCount++;
			}
			console.log('count' + errCount);
			setResult(obj);
		}
	}

	 function handleLoad() {
		 setData(JSON.parse(localStorage.getItem('valid')));
		 validateForm();
		// window.location.reload();
	}
	return (
		<Container pt="5rem">
			<iframe
				onClick={() => console.log('click')}
				onLoad={() => handleLoad()}
				style={{
					width: '100%',
					height: 'calc(100vh - 15rem)',
					border: '2px solid red'
				}}
				title="form"
				src={`${window.location.href}form`}
			/>
			Result: {JSON.stringify(result)}
		</Container>
	);
}

export default Parent;
