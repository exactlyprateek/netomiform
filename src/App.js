import React from 'react';
import Form from './components/Form';
// import Parent from './components/Parent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Parent from './components/Parent';

function App() {
	return (
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Parent  />} />

					<Route path="form" element={<Form />} />

					{/* <Route path="invoices" element={<Invoices />} /> */}
				</Routes>
			</BrowserRouter>
		
	);
}

export default App;
