import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import me from '../../img/portfolio/new_profile.PNG'


export default function About() {
  return (
    <MDBContainer >
      <MDBRow>
        <MDBCol>
          <img src={me} alt="thumbnail" className="img-fluid z-depth-1 rounded-circle"/>
          <div class="d-flex justify-content-end">
  <h2>My name is Hamlet Valladares and I'm originally from Tegucigalpa, Honduras. I have always enjoyed avid problem solving requiring science and technology. Understanding automation and the technologies that involve it are one of the most valuable skills to currently master. This is one of the main reasons why I started learning how to code so I can one day become a coding expert. I am currently enrolled in the University of North Carolina | Chapel-Hill Full Stack Web Development Program.

  </h2>
</div>
        </MDBCol>
      </MDBRow>
      
  </MDBContainer>



);
}
