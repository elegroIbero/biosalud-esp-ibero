import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Contact = function () {
	return (
		<Container fluid className='section-1' as='section'>
			<Container as='main'>
				<Row className='justify-content-center'>
					<Col md={6} className='p-4'>
						<Card className='h-100'>
							<Card.Body>
								<h4>Estamos aquí para ayudarle</h4>
								<p>
									Si tiene alguna pregunta, necesita más información sobre nuestros servicios o desea programar una
									cita, no dude en ponerse en contacto con nosotros.
								</p>
								<Form>
									<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
										<Form.Label>Nombre completo</Form.Label>
										<Form.Control type='nombre' placeholder='nombre' />
									</Form.Group>
									<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
										<Form.Label>Telefono</Form.Label>
										<Form.Control type='nombre' placeholder='nombre' />
									</Form.Group>
									<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
										<Form.Label>Email</Form.Label>
										<Form.Control type='email' placeholder='name@example.com' />
									</Form.Group>
									<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
										<Form.Label>Asunto de contacto</Form.Label>
										<Form.Control as='textarea' rows={3} />
									</Form.Group>
									<Button type='submit'>Enviar</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6} className='p-4'>
						<Card className='h-100'>
							<Card.Body>
								<h4>Ubicación</h4>
								<p>Visítenos en nuestra oficina para una consulta en persona.</p>
								<iframe
									title='location-map'
									width='100%'
									height={250}
									style={{ border: 0 }}
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.445985228205!2d-74.08379708477288!3d4.609710043422747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99e5b2a2c3a1%3A0x8e3f99e5b2a2c3a1!2sCalle%20123%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1622567087520!5m2!1sen!2sus'
									allowFullScreen=''
									loading='lazy'
								></iframe>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export { Contact };
