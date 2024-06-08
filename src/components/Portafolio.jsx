import { Card, Col, Row, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import recicle from '/reciclaje_indus.png';
import manejo from '/imagenx.jpeg';
import veshchestv from '/veshchestv.jpg';
import aseca from '/aseca.jpg';

const Portafolio = () => {
	return (
		<>
			<Container fluid className='section-1' as='section'>
				<Container as='main'>
					<Row>
						<Col className='p-4'>
							<Card className='card-light h-100'>
								<Card.Body>
									<Card.Title>Soluciones Integrales para la Gestión de Desechos Biológicos</Card.Title>
									<p className='text-center'>
										<img src={recicle} className='img-responsive' alt='Vite logo' width={400} />
									</p>
									<Card.Text>
										En BioSalud S.A.S, estamos comprometidos con la protección de la salud pública y el medio ambiente
										mediante la gestión eficiente y responsable de desechos biológicos.
										<br /> Conscientes de los desafíos que enfrenta el sector, ofrecemos una gama de servicios diseñados
										para abordar los riesgos, costos elevados y barreras para el crecimiento que impactan a las empresas
										recolectoras y a la comunidad en general.
									</Card.Text>
									<p className='text-center p-4'>
										<img src={manejo} className='img-responsive' alt='Vite logo' width={200} />
									</p>
									<h4 className='pt-4'>Manejo de los desechos biologicos</h4>
									<p>Compatimos el siguiente Webinar de manejo de los desechos bilogicos de la Corporativo CIPSA</p>
									<p>
										Manejo de residuos peligrosos biológico-infecciosos. Clasificación y especificaciones de manejo
										basados en la Norma Oficial Internacional NOM-087-ECOL-SSA1-2002
									</p>
									<iframe
										width='100%'
										height='315'
										src='https://www.youtube.com/embed/0U_khWY4qus?si=8b06IBMWLRhwqHiM'
										title='YouTube video player'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowfullscreen
									></iframe>
								</Card.Body>
							</Card>
						</Col>
						<Col className='p-4'>
							<Card className='card-color h-100'>
								<Card.Body>
									<Card.Title>
										<b>Nuestros Servicios</b>
									</Card.Title>
									<Card.Text>
										<i>Recolección Segura de Desechos Biológicos</i>
										<br />
										Descripción: Proporcionamos un servicio de recolección de desechos biológicos seguro y eficiente,
										adaptado a las necesidades específicas de clínicas, hospitales y laboratorios.
										<br />
										Beneficios: Reducción de riesgos para la salud y el medio ambiente mediante prácticas seguras y
										reguladas.
										<br />
										<br />
										<strong>Transporte Especializado</strong>
										<br />
										Descripción: Contamos con una flota de vehículos equipados y certificados para el transporte seguro
										de desechos biológicos.
										<p className='text-center'>
											<img src={aseca} className='img-responsive' alt='Vite logo' width={400} />
										</p>
										<br />
										Beneficios: Minimización de incidentes y cumplimiento de las normativas de transporte de materiales
										peligrosos.
										<br />
										<br />
										<strong>Disposición Final Responsable</strong>
										<br />
										Descripción: Ofrecemos servicios de eliminación de desechos en plantas de tratamiento autorizadas,
										asegurando que los residuos sean manejados de manera adecuada.
										<br />
										Beneficios: Reducción del impacto ambiental y promoción de prácticas sostenibles.
										<br />
										<br />
										<strong>Consultoría y Capacitación</strong>
										<br />
										Descripción: Brindamos asesoría y programas de capacitación para el manejo adecuado de desechos
										biológicos.
										<br />
										Beneficios: Aumento de la conciencia y competencias del personal, mejorando la seguridad y
										eficiencia operativa.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<div className='p-4'>
							<Card className='card-color h-100'>
								<Card.Body>
									<Card.Title className='mb-4'>Tabla Nuestros Servicios</Card.Title>
									<Table striped bordered hover>
										<thead>
											<tr>
												<th>Servicio</th>
												<th>Descripción</th>
												<th>Precio (COP)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Recolección y transporte de desechos biológicos en bolsas rojas</td>
												<td>
													Recolección de desechos biológicos generados en centros de salud, laboratorios, clínicas
													veterinarias, entre otros, en bolsas rojas certificadas. Incluye transporte a instalaciones
													autorizadas para su tratamiento o disposición final.
												</td>
												<td>Desde 5.000 por kilogramo</td>
											</tr>
											<tr>
												<td>Segregación y clasificación de desechos biológicos</td>
												<td>
													Servicio especializado para la correcta separación y clasificación de desechos biológicos en
													diferentes categorías, según las normas vigentes.
												</td>
												<td>Desde 10.000 por kilogramo</td>
											</tr>
											<tr>
												<td>Inactivación de desechos biológicos</td>
												<td>
													Aplicación de métodos físicos o químicos para inactivar agentes patógenos presentes en los
													desechos biológicos, reduciendo su potencial infeccioso.
												</td>
												<td>Desde 15.000 por kilogramo</td>
											</tr>
											<tr>
												<td>Capacitación en manejo de desechos biológicos</td>
												<td>
													Entrenamiento teórico y práctico para el personal de centros de salud, laboratorios y otros
													generadores de desechos biológicos, sobre las normas, procedimientos y buenas prácticas para
													su manejo seguro.
												</td>
												<td>Desde 200.000 por persona</td>
											</tr>
											<tr>
												<td>Asesoría en gestión de desechos biológicos</td>
												<td>
													Asesoría personalizada para la implementación de un sistema de gestión integral de desechos
													biológicos, que cumpla con la normativa vigente y minimice riesgos para la salud y el medio
													ambiente.
												</td>
												<td>Desde 500.000 por mes</td>
											</tr>
											<tr>
												<td>Elaboración de planes de gestión de desechos biológicos</td>
												<td>
													Elaboración de un plan personalizado para la gestión adecuada de los desechos biológicos,
													incluyendo protocolos, procedimientos y registros.
												</td>
												<td>Desde 1.000.000 por plan</td>
											</tr>
											<tr>
												<td>Auditorías de cumplimiento normativo</td>
												<td>
													Evaluación del cumplimiento de la normativa vigente en materia de gestión de desechos
													biológicos, identificando brechas y oportunidades de mejora.
												</td>
												<td>Desde 2.000.000 por auditoría</td>
											</tr>
											<tr>
												<td>Suministro de contenedores y bolsas para desechos biológicos</td>
												<td>
													Venta de contenedores y bolsas especiales para el almacenamiento seguro de desechos
													biológicos, de acuerdo a las normas vigentes.
												</td>
												<td>Precio varía según tipo y cantidad</td>
											</tr>
											<tr>
												<td>Descontaminación de áreas expuestas a desechos biológicos</td>
												<td>
													Limpieza y desinfección profunda de áreas que hayan estado expuestas a derrames u otro tipo de
													contacto con desechos biológicos, utilizando productos y técnicas adecuadas.
												</td>
												<td>Desde 3.000 por metro cuadrado</td>
											</tr>
										</tbody>
									</Table>
								</Card.Body>
							</Card>
						</div>
					</Row>
				</Container>

				<Container as='main'>
					<Row>
						<Col className='p-4'>
							<Card className='card-color h-100'>
								<Card.Body>
									<Card.Title>
										<b>Principios y Desafíos Abordados</b>
									</Card.Title>
									<Card.Text>
										<i>Riesgos para la Salud y el Medio Ambiente</i>
										<br />
										Desafío: La gestión inadecuada de desechos biológicos puede causar graves incidentes que afecten la
										salud de la comunidad y dañen el ecosistema.
										<br />
										Solución de BioSalud S.A.S: Implementamos procesos rigurosos y tecnologías avanzadas para garantizar
										una recolección y disposición final seguras, mitigando los riesgos de contaminación y exposición.
										<br />
										<br />
										<strong>Costos Elevados</strong>
										<br />
										Desafío: Las ineficiencias en el manejo de desechos pueden resultar en mayores costos operativos y
										financieros para las empresas recolectoras.
										<br />
										Solución de BioSalud S.A.S: Optimizamos las rutas de recolección y utilizamos un sistema CRM y una
										App móvil para gestionar de manera integral y eficiente todas las operaciones, reduciendo costos y
										mejorando la rentabilidad.
										<br />
										<br />
										<strong>Barreras para el Crecimiento</strong>
										<br />
										Desafío: Las limitaciones en la capacidad de adaptarse a las demandas crecientes y expandir los
										servicios de manera sostenible pueden obstaculizar el crecimiento de las empresas.
										<br />
										Solución de BioSalud S.A.S: Ofrecemos soluciones escalables y flexibles que permiten a nuestros
										clientes adaptarse a las cambiantes necesidades del mercado, promoviendo un crecimiento sostenible y
										eficiente.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className='p-4'>
							<Card className='card-light h-100'>
								<Card.Body>
									<Card.Title className='pb-4'>
										<b>Objetivo del Proyecto</b>
									</Card.Title>
									<Card.Text>
										Nuestro objetivo es diseñar e implementar soluciones que aborden estos desafíos de manera integral,
										asegurando un sistema de recolección de desechos biológicos que sea eficiente, seguro y sostenible.
										Con BioSalud S.A.S, puede estar seguro de que está contribuyendo a un futuro más saludable y
										respetuoso con el medio ambiente.
									</Card.Text>
									<p className='text-center'>
										<img src={veshchestv} className='img-responsive' alt='Vite logo' width={400} />
									</p>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export { Portafolio };
