import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import planet from '/planet-illustration.png';
import recicle from '/reciclaje_indus.png';
import logotipo from '/logo.png';

import imfondo from '/desechos_back.png';

const Home = function () {
	return (
		<>
			<Container fluid='true' className='section-1' as='section'>
				<Container as='main'>
					<Row>
						<Col className='p-4'>
							<Card className='card-light'>
								<h2 className='mb-4 text-center'>Bienvenidos a BioSalud S.A.S</h2>
								<p className='text-center'>
									<img src={logotipo} className='img-responsive' alt='Vite logo' width={200} />
								</p>
								<p>
									Somos su socio estratégico en la gestión de desechos biológicos. Nos dedicamos a proteger la salud
									pública y el medio ambiente mediante un manejo especializado y riguroso de los desechos de clínicas,
									hospitales y laboratorios.
								</p>
								<p className='text-center'>
									<img src={planet} className='img-responsive' alt='Vite logo' width={300} />
								</p>
							</Card>
						</Col>
						<Col className='p-4'>
							<Card className='card-color'>
								<h4 className='mb-4 text-center'>Compromiso con la Salud Pública y el Medio Ambiente</h4>
								<p className='text-center'>
									<img src={recicle} className='img-responsive' alt='Vite logo' width={400} />
								</p>
								<p>
									En BioSalud S.A.S, entendemos la importancia de una gestión adecuada de los desechos biológicos para
									la protección de la salud pública y el medio ambiente. Nos comprometemos a:
								</p>
								<p>
									Reducir el Riesgo de Contaminación: Implementando prácticas seguras y responsables. Minimizar el
									Impacto Ambiental: Utilizando tecnologías que favorecen la sostenibilidad. Promover la Seguridad:
									Garantizando que todo nuestro personal esté debidamente capacitado y equipado.
								</p>
							</Card>
						</Col>
						<p className='text-center'>
							<img src={imfondo} className='img-responsive' alt='Vite logo' width={'auto'} />
						</p>
					</Row>
				</Container>

				<Container as='main'>
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
									Transporte Seguro Vehículos acondicionados para el transporte de desechos biológicos. Rutas
									optimizadas para una logística eficiente. Cumplimiento de todas las normativas de seguridad.
									Disposición Final Responsable
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
									En BioSalud S.A.S, implementamos soluciones tecnológicas de vanguardia para asegurar un manejo
									integral y transparente de los desechos biológicos. Nuestro sistema CRM y nuestra App móvil están
									diseñados para:
								</p>
								<h4 className='mb-4'>Registro y Seguimiento Preciso:</h4>
								<p>
									Captura de datos en tiempo real sobre la recolección de desechos. Control de Asistencia: Monitoreo de
									la asistencia del personal en los puntos de recolección. Gestión Integral: Administración eficiente de
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
			</Container>
		</>
	);
};

export { Home };
