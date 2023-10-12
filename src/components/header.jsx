import React from 'react'

import styled from 'styled-components';


const Button = styled.a`
  color: white;
  transition: 0.3s;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background-color: rgb(3 79 119);
    color: #a6a6a6;
  }
`;

const linkStyles = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    transition: '0.3s',
    width:'100%',
    height:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'10px'
}

const headerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '68px',
    backgroundColor: '#0077b6',
    position: 'sticky',
    top: '0',
    zIndex: '1',
    boxShadow: '0px 5px 5px grey'
}



const container = {
    marginRight: '20px',
    width: '17%',
    height:'70%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}

const Headers = () => {
    return (
        <>
        <header style={headerStyles}>
            <div style={container} className='container_Footer'>
                <Button href="/" className="hover" style={linkStyles}>Encrypt</Button>
            </div>
        </header>
        <div style={{height: '20px'}}></div>
        </>
    )
}

export default Headers