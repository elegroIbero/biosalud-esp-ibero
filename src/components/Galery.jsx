import Container from 'react-bootstrap/Container';

const Galery = function () {
	return (
		<>
			<Container fluid='true' className='mt-4 bg-body-tertiary' as='section'>
				<Container className='mt-4' as='main'>
					<h1 className='header'>Galeria</h1>
					<div className='card'>
						<p>
							Edit <code>src/App.jsx</code> and save to test HMR
						</p>
					</div>
				</Container>
			</Container>
		</>
	);
};

export { Galery };
