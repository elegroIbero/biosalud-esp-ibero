import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Home = function () {
	return (
		<>
			<Container fluid='true' className='section-1' as='section'>
				<Container as='main'>
					<Row>
						<Col className='p-4'>
							<Card>
								<h4>Bienvenidos a BioSalud S.A.S</h4>
								<p>
									Somos su socio estratégico en la gestión de desechos biológicos. Nos dedicamos a proteger la salud
									pública y el medio ambiente mediante un manejo especializado y riguroso de los desechos de clínicas,
									hospitales y laboratorios.
								</p>
							</Card>
						</Col>
						<Col className='p-4'>
							<Card>
								<h4>Compromiso con la Salud Pública y el Medio Ambiente</h4>
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
					</Row>
				</Container>
			</Container>

			<Container fluid='true' className='section-2' as='section'>
				<Container as='main'>
					<Row>
						<Col className='p-4'>
							<Card>
								<h4>Nuestros Servicios</h4>
								<h5>Recolección de Desechos Biológicos</h5>
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
							<Card>
								<p>
									En BioSalud S.A.S, implementamos soluciones tecnológicas de vanguardia para asegurar un manejo
									integral y transparente de los desechos biológicos. Nuestro sistema CRM y nuestra App móvil están
									diseñados para:
								</p>
								<p>
									Registro y Seguimiento Preciso: Captura de datos en tiempo real sobre la recolección de desechos.
									Control de Asistencia: Monitoreo de la asistencia del personal en los puntos de recolección. Gestión
									Integral: Administración eficiente de todas las operaciones, desde la recolección hasta la disposición
									final. Beneficios para Nuestros Clientes
								</p>
								<p>
									Trazabilidad Completa: Acceso a información detallada sobre el manejo de sus desechos. Cumplimiento
									Normativo: Garantía de cumplimiento con todas las regulaciones vigentes. Eficiencia Operativa:
									Optimización de procesos logísticos y administrativos.
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
