import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<>
			<Navbar collapseOnSelect expand='lg' fixed='top' sticky='bottom' className='bg-body-tertiary'>
				<Container>
					<Link className='navbar-brand' to='/'>
						React APP
					</Link>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Row>
						<Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
							<Nav className='me-auto my-2 my-lg-0'>
								<Link className='nav-link' to='/'>
									Home
								</Link>
								<Link className='nav-link' to='/galery'>
									Galeria
								</Link>
								<Link className='nav-link' to='/contact'>
									Contacto
								</Link>
							</Nav>
							<NavDropdown title='Cuenta' id='collapsible-nav-dropdown' style={{ marginLeft: '40px' }}>
								<Link className='dropdown-item' to='/'>
									Iniciar sesión
								</Link>
								<Link className='dropdown-item' to='/home'>
									Registrar
								</Link>
							</NavDropdown>
						</Navbar.Collapse>
					</Row>
				</Container>
			</Navbar>
		</>
	);
};

export default Menu;
