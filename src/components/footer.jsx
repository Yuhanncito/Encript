import React from 'react';
import './component.css';
import { Row, Col} from 'react-bootstrap';
import styled from 'styled-components';


const Button = styled.a`
  color: white;
  background-color: black;
  transition: 0.3s;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background-color: #2c2c2c;
    color: #a6a6a6;
  }
`;

const FooterS = () => {

    return (
        <>
            <div style={{height: '100px', width: '100%'}}></div>
            <footer style={{backgroundColor: 'black', color: 'white', height: '100px', width: '100%', position: 'fixed', bottom: '0'}}>
                <Row className='cositas' xs={2} md={2}>
                
            </Row>
            
            </footer>
        </>
    )
}

const footerLink = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        transition: '0.3s',
        width:'100%',
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:'10px',
       
    }

export default FooterS;