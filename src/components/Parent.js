import React from 'react';
import Form from './Form';
import IframeSigninForm from './IFrameForm';
// import IframeSigninForm from './IframeSigninForm';

function Parent() {
	return (
		<div>
			<IframeSigninForm
				content={
					<form
						action="https://app.usXX.list-manage.com/subscribe/post"
						method="post"
						formTarget="hiddenFrame"
					/>
				}
			/>

			{/* <iframe title="form">
                <Form />
            </iframe> */}
		</div>
	);
}

export default Parent;
