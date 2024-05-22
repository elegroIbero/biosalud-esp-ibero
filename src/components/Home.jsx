import Container from 'react-bootstrap/Container';

const Home = function () {
	return (
		<>
			<Container className='mt-4' as='main'>
				<h1 className='header'>Home</h1>
				<div className='card'>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
			</Container>
		</>
	);
};

export { Home };
