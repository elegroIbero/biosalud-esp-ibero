import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import Container from 'react-bootstrap/Container';

const Footer = function () {
	return (
		<Container fluid='true' className='footer mt-4 bg-body-tertiary' as='footer'>
			<Container className='p-0'>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' width={80} />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' width={80} />
				</a>
			</Container>
		</Container>
	);
};

export default Footer;
