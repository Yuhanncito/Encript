import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Row style={{justifyContent: 'space-between', width: '80%', margin: 'auto' ,marginBottom:'50px',  border: '1px solid black', padding: '20px', boxShadow: '5px 5px 5px grey', borderRadius: '10px'}}>
      <Col xs={12} md={6} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black', padding: '20px', backgroundColor: '#0072C6', borderRadius: '10px'}}>
        <Image src={require('../imgs/gera.jpg')} alt="placeholder" style={{width: '200px', height: '200px', borderRadius: '50%', boxShadow: '5px 5px 5px grey'}} />
        <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px', color: 'white', textShadow: '2px 2px 2px grey'}}>Gerardo Olivares Aguilar</p>
        <p style={{fontSize: '1.3rem', color: 'white', textShadow: '2px 2px 2px grey'}}>20211310@uthh.edu.mx</p>
      </Col>
      <Col xs={12} md={6} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black', padding: '20px', backgroundColor: '#00B0F0', borderRadius: '10px', marginTop: '20px'}}>
        <Image src={require('../imgs/yu.jpg')} alt="placeholder" style={{width: '200px', height: '200px', borderRadius: '50%', boxShadow: '5px 5px 5px grey'}} />
        <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px', color: 'white', textShadow: '2px 2px 2px grey'}}>Gizé Yuhann Martinez Espinosa</p>
        <p style={{fontSize: '1.3rem', color: 'white', textShadow: '2px 2px 2px grey'}}>20211045uthh.edu.mx</p>
      </Col>
    </Row>
  );
};
// Recomendaciones de librerías de React para diseño
// Algunas opciones populares son:
// - Material UI: https://material-ui.com/
// - Bootstrap: https://react-bootstrap.github.io/
// - Semantic UI: https://react.semantic-ui.com/
// - Ant Design: https://ant.design/

// Código de instalación para cada librería:
// - Material UI: npm install @material-ui/core
// - Bootstrap: npm install react-bootstrap bootstrap
// - Semantic UI: npm install semantic-ui-react semantic-ui-css
// - Ant Design: npm install antd

// Librerías para animaciones de React
// Algunas opciones populares son:
// - React Spring: https://www.react-spring.io/
// - Framer Motion: https://www.framer.com/motion/
// - Anime.js: https://animejs.com/
// - Lottie: https://airbnb.io/lottie/

// Código de instalación para cada librería:
// - React Spring: npm install react-spring
// - Framer Motion: npm install framer-motion
// - Anime.js: npm install animejs
// - Lottie: npm install lottie-react


export default About;