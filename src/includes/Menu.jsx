import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '/logo-imagen.png';
import 'bootstrap/scss/bootstrap-utilities.scss';

const Menu = () => {
	return (
		<Navbar collapseOnSelect expand='lg' fixed='top' sticky='bottom' as='navbar'>
			<Container>
				<Link className='navbar-brand' to='/'>
					<img src={logo} className='d-inline-block align-text-top' alt='Vite logo' width={40} />
					<span className='h4'> BioSalud S.A.S</span>
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto my-2 my-lg-0' as='nav'>
						<Link className='nav-link' to='/'>
							Información
						</Link>
						<Link className='nav-link' to='/portafolio'>
							Portafolio
						</Link>
						<Link className='nav-link' to='/contact'>
							Contacto
						</Link>
						<NavDropdown title='Cuenta' id='collapsible-nav-dropdown-01' className='d-lg-none d-xl-none'>
							<Link className='dropdown-item' to='/'>
								Iniciar sesión
							</Link>
							<Link className='dropdown-item' to='/home'>
								Registrar
							</Link>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>

				<Nav className='d-none d-lg-block' as='nav'>
					<NavDropdown title='Cuenta' id='collapsible-nav-dropdown-02'>
						<Link className='dropdown-item' to='/login'>
							Iniciar sesión
						</Link>
					</NavDropdown>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Menu;
