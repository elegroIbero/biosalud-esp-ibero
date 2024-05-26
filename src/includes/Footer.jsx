import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import Container from 'react-bootstrap/Container';

const Footer = function () {
	return (
		<>
			<Container fluid='true' className='section-2'>
				<Container className='footer pt-4'>
					<Container className='p-0 text-white'>
						<p>
							¿Desea más información sobre nuestros servicios o tiene alguna consulta? No dude en ponerse en contacto
							con nosotros.
						</p>
						<ul>
							<li className='list-group-item'>Teléfono: +57 123 456 7890</li>
							<li className='list-group-item'>Correo Electrónico: info@biosalud.com</li>
							<li className='list-group-item'>Dirección: Calle 123, Bogotá, Colombia</li>
							<li className='list-group-item'>Síganos en nuestras redes sociales:</li>
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
			</Container>
			<Container fluid='true' as='footer'>
				<p className='text-white'>© 2024 BioSalud S.A.S. Todos los derechos reservados.</p>
			</Container>
		</>
	);
};

export default Footer;
