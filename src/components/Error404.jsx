import Container from 'react-bootstrap/Container';

const Error404 = function () {
	return (
		<Container className='mt-4' as='main'>
			<h1 className='header'>Error </h1>
			<div className='card'>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
		</Container>
	);
};

export { Error404 };
