import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Vista1 = () => {
  const titleStyles = {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#0077b6',
  };
  const subtitleStyles = {
    fontSize: '20px',
    color: '#0077b6',
  };
  const sectionStyles = {
    height: '150px',
    margin: '20px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const sectionTitleStyles = {
    height:'auto',
    width:'100%',
    maxWidth:'70%',
    padding: '30px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
  };
  const mediaQueryStyles = {
    '@media (max-width: 768px)': {
      sectionStyles: {
        height: 'auto',
        margin: '10px',
      },
      sectionTitleStyles: {
        width: '90%',
        padding: '5px',
      },
      titleStyles: {
        fontSize: '25px',
      },
      subtitleStyles: {
        fontSize: '18px',
      },
    },
  };
  return (
    <Container style={{display: 'flex', flexDirection: 'column'}}>
        <Row>
            <Col style={{...sectionStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionStyles}}>
                <div style={{...sectionTitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionTitleStyles}}>
                    <h1 style={{...titleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].titleStyles, textAlign: 'center'}}>Administradora de Comercios y Franquicias</h1>
                </div>
            </Col>
        </Row>
        
        <Row style={{marginTop: '20px'}}>
            <Col style={{...sectionStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionStyles}}>
                <div style={{...sectionTitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionTitleStyles}}>
                    <h1 style={{...titleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].titleStyles, textAlign: 'center'}}>Problemática</h1>
                    <p style={{...subtitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].subtitleStyles}}>La ausencia de un sistema centralizado para registrar y priorizar las tareas pendientes ha provocado una desorganización generalizada en la empresa. Con frecuencia, los empleados desconocen cuáles son las tareas más urgentes o importantes, lo que resulta en una asignación ineficiente de recursos y tiempo.</p>
                    <p style={{...subtitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].subtitleStyles}}>La falta de un sistema de gestión de tareas ha tenido un impacto negativo en la capacidad para llevar a cabo las tareas de manera eficaz. No disponer de un orden claro sobre quién debe realizar cada tarea y en qué plazo conduce a una falta de dirección y coordinación en las actividades laborales.</p>
                </div>
            </Col>
        </Row>

        <Row>
            <Col style={{...sectionStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionStyles}}>
                <div style={{...sectionTitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].sectionTitleStyles}}>
                    <h1 style={{...titleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].titleStyles, textAlign: 'center'}}>Project's Manager Gan</h1>
                    <p style={{...subtitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].subtitleStyles}}>Para abordar esta problemática, es importante implementar un sistema de gestión de tareas eficaz. Este sistema debe ser capaz de:</p>
                    <ul style={{...subtitleStyles, ...mediaQueryStyles['@media (max-width: 768px)'].subtitleStyles}}>
                        <li>Registrar y priorizar tareas pendientes.</li>
                        <li>Asignar responsabilidades claras a los miembros del equipo.</li>
                        <li>Facilitar el seguimiento del progreso de las tareas.</li>
                        <li>Generar informes que ayuden en la toma de decisiones.</li>
                        <li>Contener información general del proyecto.</li>
                    </ul>
                </div>
            </Col>
        </Row>
        
    </Container>
  );
};
export default Vista1;