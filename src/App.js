import React from 'react';
import Form from './components/Form';
// import Parent from './components/Parent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Parent from './components/Parent';

function App() {
	const [ validator, setValidator ] = React.useState({});
	return (
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Parent validator={validator} setValidator={setValidator} />} />

					<Route path="form" element={<Form validator={validator} setValidator={setValidator} />} />

					{/* <Route path="invoices" element={<Invoices />} /> */}
				</Routes>
			</BrowserRouter>
		
	);
}

export default App;
