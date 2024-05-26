import { Card, Col, Row, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Contact = function () {
	return (
		<Container fluid='true' className='section-1' as='section'>
			<Container as='main'>
				<Row>
					<Col className='p-4'>
						<Card>
							<h4>Estamos aquí para ayudarle</h4>
							<p>
								Si tiene alguna pregunta, necesita más información sobre nuestros servicios o desea programar una cita,
								no dude en ponerse en contacto con nosotros.
							</p>
							<Form>
								<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
									<Form.Label>Email address</Form.Label>
									<Form.Control type='email' placeholder='name@example.com' />
								</Form.Group>
								<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
									<Form.Label>Example textarea</Form.Label>
									<Form.Control as='textarea' rows={3} />
								</Form.Group>
							</Form>
						</Card>
					</Col>
					<Col className='p-4'>
						<Card>
							<h4>Ubicación</h4>
							<p>Visítenos en nuestra oficina para una consulta en persona.</p>
							<iframe
								width={600}
								height={450}
								style={{ border: 0 }}
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.445985228205!2d-74.08379708477288!3d4.609710043422747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99e5b2a2c3a1%3A0x8e3f99e5b2a2c3a1!2sCalle%20123%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1622567087520!5m2!1sen!2sus'
							></iframe>
						</Card>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export { Contact };
