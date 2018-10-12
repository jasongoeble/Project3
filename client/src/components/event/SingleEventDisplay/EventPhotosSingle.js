import React from 'react';
import { Container } from 'mdbreact';

const EventPhotosSingle = () =>  {
  const newsStyle={borderBottom: '1px solid #e0e0e0', marginBottom: '1.5rem'}
  return(
    <Container style={{maxWidth: '80%'}}>
    <h1> Event Photos</h1>
    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/1.jpg" alt="Sample image"/>
    <br />
    <br />
    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="Sample image"/>
    <br />
    <br />

    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" alt="Sample image"/>
    <br />
    <br />

    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg" alt="Sample image"/>




        
    </Container>
  );
}

export default EventPhotosSingle;