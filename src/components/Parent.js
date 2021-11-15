import React from 'react';
import { Container } from '@chakra-ui/react';

function Parent({ validator, setValidator }) {
	return (
		<Container pt="5rem">
			<iframe
			onClick={() => console.log("click")}
				onMouseEnter={e => console.log(e.target)}
				style={{
					width: '100%',
					height: 'calc(100vh - 15rem)',
					border: '2px solid red'
				}}
				title="form"
				src={`${window.location.href}form`}
			/>
			Result: {JSON.stringify(validator)}
		</Container>
	);
}

export default Parent;
