import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import Container from 'react-bootstrap/Container';

const Footer = function () {
	return (
		<>
			<Container className='footer mt-4'>
				<Container className='p-0'>
					<p>
						¿Desea más información sobre nuestros servicios o tiene alguna consulta? No dude en ponerse en contacto con
						nosotros.
					</p>
					<ul>
						<li>Teléfono: +57 123 456 7890</li>
						<li>Correo Electrónico: info@biosalud.com</li>
						<li>Dirección: Calle 123, Bogotá, Colombia</li>
						<li>Síganos en nuestras redes sociales:</li>
					</ul>
					Facebook Twitter LinkedIn
					<a href='https://vitejs.dev' target='_blank'>
						<img src={viteLogo} className='logo' alt='Vite logo' width={80} />
					</a>
					<a href='https://react.dev' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' width={80} />
					</a>
					<p>BioSalud S.A.S: Innovación y Compromiso en la Gestión de Desechos Biológicos</p>
				</Container>
			</Container>
			<Container fluid='true' as='footer'>
				<p className='text-white p-1'>© 2024 BioSalud S.A.S. Todos los derechos reservados.</p>
			</Container>
		</>
	);
};

export default Footer;
