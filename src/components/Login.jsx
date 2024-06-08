import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logotipo from '/logo.png';
import 'bootstrap/scss/bootstrap-grid.scss';

const Login = function () {
	return (
		<Container fluid='true' className='section-1 pb-4' as='section'>
			<Container as='section'>
				<Row>
					<Col></Col>
					<Col xs={5} className='mt-4'>
						<Card>
							<Col className='card-light'>
								<p className='text-center'>
									<img src={logotipo} className='img-fluid' alt='Vite logo' width={200} />
								</p>
								<h1 className='mb-4 mt-4 text-center'>Login</h1>
								<p>
									Nos dedicamos a proteger la salud pública y el medio ambiente mediante un manejo especializado y
									riguroso de los desechos de clínicas, hospitales y laboratorios.
								</p>
								<Col xs={10} className='mt-4'>
									<Form>
										<fieldset>
											<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
												<Form.Label>Email de usuario</Form.Label>
												<Form.Control type='email' placeholder='name@example.com' />
											</Form.Group>
											<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
												<Form.Label>Clave</Form.Label>
												<Form.Control type='password' as='input' />
											</Form.Group>
											<Button type='submit'>Enviar</Button>
										</fieldset>
									</Form>
								</Col>
							</Col>
						</Card>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</Container>
	);
};

export { Login };
