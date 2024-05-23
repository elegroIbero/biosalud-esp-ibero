import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Portafolio = function () {
	return (
		<>
			<Container fluid='true' className='section-1' as='section'>
				<Container as='main'>
					<Row>
						<Col className='p-4'>
							<Card>
								<p>
									Soluciones Integrales para la Gestión de Desechos Biológicos
									<br />
									En BioSalud S.A.S, estamos comprometidos con la protección de la salud pública y el medio ambiente
									mediante la gestión eficiente y responsable de desechos biológicos. Conscientes de los desafíos que
									enfrenta el sector, ofrecemos una gama de servicios diseñados para abordar los riesgos, costos
									elevados y barreras para el crecimiento que impactan a las empresas recolectoras y a la comunidad en
									general.
								</p>
							</Card>
						</Col>
						<Col className='p-4'>
							<Card>
								Nuestros Servicios
								<br />
								Recolección Segura de Desechos Biológicos
								<br />
								Descripción: Proporcionamos un servicio de recolección de desechos biológicos seguro y eficiente,
								adaptado a las necesidades específicas de clínicas, hospitales y laboratorios. Beneficios: Reducción de
								riesgos para la salud y el medio ambiente mediante prácticas seguras y reguladas. Transporte
								Especializado
								<br />
								Descripción: Contamos con una flota de vehículos equipados y certificados para el transporte seguro de
								desechos biológicos. Beneficios: Minimización de incidentes y cumplimiento de las normativas de
								transporte de materiales peligrosos. Disposición Final Responsable
								<br />
								Descripción: Ofrecemos servicios de eliminación de desechos en plantas de tratamiento autorizadas,
								asegurando que los residuos sean manejados de manera adecuada. Beneficios: Reducción del impacto
								ambiental y promoción de prácticas sostenibles. Consultoría y Capacitación
								<br />
								Descripción: Brindamos asesoría y programas de capacitación para el manejo adecuado de desechos
								biológicos. Beneficios: Aumento de la conciencia y competencias del personal, mejorando la seguridad y
								eficiencia operativa.
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
								Principios y Desafíos Abordados
								<br />
								Riesgos para la Salud y el Medio Ambiente
								<br />
								Desafío: La gestión inadecuada de desechos biológicos puede causar graves incidentes que afecten la
								salud de la comunidad y dañen el ecosistema. Solución de BioSalud S.A.S: Implementamos procesos
								rigurosos y tecnologías avanzadas para garantizar una recolección y disposición final seguras, mitigando
								los riesgos de contaminación y exposición. Costos Elevados
								<br />
								Desafío: Las ineficiencias en el manejo de desechos pueden resultar en mayores costos operativos y
								financieros para las empresas recolectoras. Solución de BioSalud S.A.S: Optimizamos las rutas de
								recolección y utilizamos un sistema CRM y una App móvil para gestionar de manera integral y eficiente
								todas las operaciones, reduciendo costos y mejorando la rentabilidad. Barreras para el Crecimiento
								<br />
								Desafío: Las limitaciones en la capacidad de adaptarse a las demandas crecientes y expandir los
								servicios de manera sostenible pueden obstaculizar el crecimiento de las empresas. Solución de BioSalud
								S.A.S: Ofrecemos soluciones escalables y flexibles que permiten a nuestros clientes adaptarse a las
								cambiantes necesidades del mercado, promoviendo un crecimiento sostenible y eficiente.
							</Card>
						</Col>
						<Col className='p-4'>
							<Card>
								Objetivo del Proyecto
								<br />
								Nuestro objetivo es diseñar e implementar soluciones que aborden estos desafíos de manera integral,
								asegurando un sistema de recolección de desechos biológicos que sea eficiente, seguro y sostenible. Con
								BioSalud S.A.S, puede estar seguro de que está contribuyendo a un futuro más saludable y respetuoso con
								el medio ambiente.
							</Card>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export { Portafolio };
