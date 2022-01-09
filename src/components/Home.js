import React from 'react';
import './style/Home.css';
import nazare from './img/nazare.jpg';
import champ from './img/gabriel.PNG'
import wave from './img/esquerdas.png';
import italo from './img/italo_olympicos.jpg';
import surfer from './img/nazare1.PNG';

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

import { Card  } from 'react-bootstrap';

const Home = () => {
  return ( 
    <>
       
    <div className='topNew'>
      <img src={ nazare } className='big-wave hover pointer'></img>
      <p></p>
      <h1 className='bold'> 
           TUDOR Nazaré Tow 
           Surfing Challenge 
           presented by Jogos Santa Casa
      </h1>
      <p className='pointer'>
      The World Surf League (WSL) TUDOR Nazaré Tow Surfing Challenge presented by Jogos Santa Casa is preparing to start competition on Sunday, December 12 at Praia do Norte in Nazaré, Portugal. The TUDOR Green Alert was issued, meaning there is increased potential the competition will run on Sunday, December 12. Event organizers will share the next competition updates at 8:00 a.m. GMT on Sunday, December 12.
      </p>
    </div>

    <MDBRow className='row-cols-2 row-cols-md-4 g-3 pointer'>
      <MDBCol>
        <MDBCard style={{ width: '18rem' }} className='h-99 hover01'>
          <MDBCardImage
            src={ champ }
          />
          <MDBCardBody>
            <MDBCardTitle>Gabriel Medina and Carissa Moore talk about the 2022 season</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '18rem' }} className='h-99 hover01'>
          <MDBCardImage
            src={ wave }
          />
          <MDBCardBody>
            <MDBCardTitle>The dream of surfing these Goofy waves!</MDBCardTitle>
            </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '18rem' }} className='h-99 hover01'>
          <MDBCardImage
            src={italo}
          />
          <MDBCardBody>
            <MDBCardTitle>Italo Ferreira gets emotional: "I wish my grandmother was alive to see what I've become"</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '18rem' }} className='h-100 hover01' >
          <MDBCardImage
            src={surfer}
          />
          <MDBCardBody>
            <MDBCardTitle>Nazaré's Big wave Comming!</MDBCardTitle>
            </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
     

    </>
   );
}
 
export default Home;