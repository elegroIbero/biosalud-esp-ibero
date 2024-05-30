import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import planet from '/planet-illustration.png';
import recicle from '/reciclaje_indus.png';
import logotipo from '/logo.png';
import imfondo from '/desechos_back.png';
import 'bootstrap/scss/bootstrap-grid.scss';

const Home = function () {
	return (
		<Container fluid='true' className='section-1 pb-4' as='section'>
			<Container as='section'>
				<Row>
					<Col className='p-4'>
						<Card className='card-light'>
							<p className='text-center'>
								<img src={logotipo} className='img-fluid' alt='Vite logo' width={300} />
							</p>
							<h5 className='mb-4 mt-4 text-center'>Bienvenidos a BioSalud S.A.S</h5>
							<p>
								Somos su socio estratégico en la gestión de desechos biológicos. Nos dedicamos a proteger la salud
								pública y el medio ambiente mediante un manejo especializado y riguroso de los desechos de clínicas,
								hospitales y laboratorios.
							</p>
							<p className='text-center'>
								<img src={planet} className='img-fluid' alt='Vite logo' width={300} />
							</p>
						</Card>
					</Col>
					<Col className='p-4'>
						<Card className='card-color'>
							<h4 className='mb-4 text-center'>Compromiso con la Salud Pública y el Medio Ambiente</h4>
							<p className='text-center'>
								<img src={recicle} className='img-fluid' alt='Vite logo' width={400} />
							</p>
							<p>
								En BioSalud S.A.S, entendemos la importancia de una gestión adecuada de los desechos biológicos para la
								protección de la salud pública y el medio ambiente. Nos comprometemos a:
							</p>
							<p>
								Reducir el Riesgo de Contaminación: Implementando prácticas seguras y responsables. Minimizar el Impacto
								Ambiental: Utilizando tecnologías que favorecen la sostenibilidad. Promover la Seguridad: Garantizando
								que todo nuestro personal esté debidamente capacitado y equipado.
							</p>
						</Card>
					</Col>
					<p className='text-center'>
						<img src={imfondo} className='img-fluid' alt='Vite logo' width={'auto'} />
					</p>
				</Row>
			</Container>

			<Container as='section'>
				<Row>
					<Col className='p-4'>
						<Card className='card-color'>
							<h4 className='mb-4'>Nuestros Servicios</h4>
							<h5 className='mb-4'>Recolección de Desechos Biológicos</h5>
							<p>
								Servicio programado y a demanda. Personal capacitado en manejo de desechos peligrosos. Equipos
								especializados para la recolección segura.
							</p>
							<p>
								Transporte Seguro Vehículos acondicionados para el transporte de desechos biológicos. Rutas optimizadas
								para una logística eficiente. Cumplimiento de todas las normativas de seguridad. Disposición Final
								Responsable
							</p>
							<p>
								Procesos de eliminación que minimizan el impacto ambiental. Plantas de tratamiento certificadas.
								Trazabilidad completa del manejo de los residuos.
							</p>
						</Card>
					</Col>
					<Col className='p-4'>
						<Card className='card-light'>
							<p>
								En BioSalud S.A.S, implementamos soluciones tecnológicas de vanguardia para asegurar un manejo integral
								y transparente de los desechos biológicos. Nuestro sistema CRM y nuestra App móvil están diseñados para:
							</p>
							<h4 className='mb-4'>Registro y Seguimiento Preciso:</h4>
							<p>
								Captura de datos en tiempo real sobre la recolección de desechos. Control de Asistencia: Monitoreo de la
								asistencia del personal en los puntos de recolección. Gestión Integral: Administración eficiente de
								todas las operaciones, desde la recolección hasta la disposición final. Beneficios para Nuestros
								Clientes
							</p>
							<h4 className='mb-4'>Trazabilidad Completa:</h4>
							<p>
								Acceso a información detallada sobre el manejo de sus desechos. Cumplimiento Normativo: Garantía de
								cumplimiento con todas las regulaciones vigentes. Eficiencia Operativa: Optimización de procesos
								logísticos y administrativos.
							</p>
						</Card>
					</Col>
				</Row>
			</Container>

			<Container as='section'>
				<Row className='m-4'>
					<h4 className='text-center'>Equipo Ibero</h4>
				</Row>
				<Row className='justify-content-center'>
					<div className='col-4'>
						<Card className='card-light'>
							<img src={logotipo} className='mx-auto d-block' width={150} />
							<div className='card-body'>
								<h5 className='card-title text-center'>Edwin Andres Legro Agudelo</h5>
								<p className='text-center'>
									Soy Analista de Innovación y Desarrollo de Sistemas de Información, con más de 10 años en el área de
									desarrollo, soporte, mantenimiento e innovación de Software.
								</p>
								<ul>
									<li className='list-group-item'>* Curso Análisis y Diseño De Sistemas</li>
									<li className='list-group-item'>* Facultad Ingenieria De Software</li>
									<li className='list-group-item'>* Semestre Número VI</li>
								</ul>
								<br />
							</div>
						</Card>
					</div>

					<div className='col-4'>
						<Card className='card-light'>
							<img src={logotipo} className='mx-auto d-block' width={150} />
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p>Some quick example text to build on the card title and make up the bulk of ths content.</p>
							</div>
						</Card>
					</div>
				</Row>
			</Container>
		</Container>
	);
};

export { Home };
