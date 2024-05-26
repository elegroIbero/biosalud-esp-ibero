import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '/logo-imagen.png';

const Menu = () => {
	return (
		<Navbar collapseOnSelect expand='lg' fixed='top' sticky='bottom'>
			<Container>
				<Link className='navbar-brand' to='/'>
					<img src={logo} className='img-responsive' alt='Vite logo' width={50} />
					<span className='m-2'>BioSalud S.A.S</span>
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto my-2 my-lg-0'>
						<Link className='nav-link' to='/'>
							Información
						</Link>
						<Link className='nav-link' to='/portafolio'>
							Portafolio
						</Link>
						<Link className='nav-link' to='/contact'>
							Contacto
						</Link>
						<NavDropdown title='Cuenta' id='collapsible-nav-dropdown'>
							<Link className='dropdown-item' to='/'>
								Iniciar sesión
							</Link>
							<Link className='dropdown-item' to='/home'>
								Registrar
							</Link>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Menu;
