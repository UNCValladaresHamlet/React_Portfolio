import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaDatabase, FaNpm, FaBootstrap, FaGit, FaGithub} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io"
import React from 'react';
import coding from '../../img/portfolio/codingcomputer.jpg'

// import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge } from "mdbreact";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
export default function Blog() {
  return (

    
    // <div class="container my-class">
    //       <h1>Programming Languages & Tools</h1>
    //               <ul class="list-inline ">
    //                 <li class="list-inline-item"> <FaHtml5 size={70} /> </li>
    //                 <li class="list-inline-item"> <FaCss3Alt size={70}/> </li>
    //                 <li class="list-inline-item"> <IoLogoJavascript size={70}/> </li>
    //                 <li class="list-inline-item"> <FaReact size={70}/> </li>
    //                 <li class="list-inline-item"> <FaNode size={70}/> </li>
    //                 <li class="list-inline-item"> <FaDatabase size={70}/> </li>
    //                 <li class="list-inline-item"> <FaNpm size={70}/> </li>
    //                 <li class="list-inline-item"> <FaBootstrap size={70}/> </li>
    //                 <li class="list-inline-item"> <FaGit size={70}/> </li>
    //                 <li class="list-inline-item"> <FaGithub size={70}/> </li>
    //               </ul>
    // </div>

//     <MDBContainer>
//   <MDBListGroup style={{ width: "22rem" }}>
//     <MDBListGroupItem className="d-flex justify-content-between align-items-center">Cras justo odio<MDBBadge color="primary"
//         pill>14</MDBBadge>
//     </MDBListGroupItem>
//     <MDBListGroupItem className="d-flex justify-content-between align-items-center">Dapibus ac facilisis in<MDBBadge
//         color="primary" pill>2</MDBBadge>
//     </MDBListGroupItem>
//     <MDBListGroupItem className="d-flex justify-content-between align-items-center">Morbi leo risus<MDBBadge color="primary"
//         pill>1</MDBBadge>
//     </MDBListGroupItem>
//   </MDBListGroup>
// </MDBContainer>

// <MDBContainer>
//   <MDBRow>
//     <MDBCol className="text-uppercase, font-weight-bold" md="6">Front End</MDBCol>
//     <MDBCol className="text-uppercase, font-weight-bold"  md="6">Back-End</MDBCol>
//     <MDBCol md="8">Html</MDBCol>
//     <MDBCol md="4">APIs</MDBCol>
//     <MDBCol md="8">CSS</MDBCol>
//     <MDBCol md="4">Node</MDBCol>
//     <MDBCol md="8">Javascript</MDBCol>
//     <MDBCol md="4">MySQL & Sequelize</MDBCol>
//     <MDBCol md="8">Responsive Design</MDBCol>
//     <MDBCol md="4">MongoDB & Sequelize</MDBCol>
//     <MDBCol md="8">React</MDBCol>
//     <MDBCol md="4">REST</MDBCol>
//     <MDBCol md="8">Bootstrap</MDBCol>
//     <MDBCol md="4"></MDBCol>

//   </MDBRow>
// </MDBContainer>

<section className="my-5">

  <div class="container my-class">
    <h1>Programming Languages & Tools</h1>
            <ul class="list-inline ">
              <li class="list-inline-item"> <FaHtml5 size={70} /> </li>
              <li class="list-inline-item"> <FaCss3Alt size={70}/> </li>
              <li class="list-inline-item"> <IoLogoJavascript size={70}/> </li>
              <li class="list-inline-item"> <FaReact size={70}/> </li>
              <li class="list-inline-item"> <FaNode size={70}/> </li>
              <li class="list-inline-item"> <FaDatabase size={70}/> </li>
              <li class="list-inline-item"> <FaNpm size={70}/> </li>
              <li class="list-inline-item"> <FaBootstrap size={70}/> </li>
              <li class="list-inline-item"> <FaGit size={70}/> </li>
              <li class="list-inline-item"> <FaGithub size={70}/> </li>
            </ul>
</div>


<MDBRow>
  <MDBCol md="4">
    <MDBRow className="mb-3">
      <MDBCol size="2">
        <MDBIcon
          icon="flag-checkered"
          size="2x"
          className="deep-purple-text"
        />
      </MDBCol>
      <MDBCol size="10">
        <h5 className="font-weight-bold mb-3">Front-End</h5>

        <ul>

          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>iQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>

        </ul>  


      </MDBCol>
    </MDBRow>


  </MDBCol>
  <MDBCol md="4" className="text-name">
    <img
      className="img-fluid"
      src= {coding}
      alt=""
    />
  </MDBCol>
  <MDBCol md="4">
    <MDBRow className="mb-3">
      <MDBCol size="2">
        <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
      </MDBCol>
      <MDBCol size="10">
        <h5 className="font-weight-bold mb-3">Back-End</h5>
          <ul>

            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & Sequelize</li>
            <li>REST</li>
            <li>GraphQL</li>

          </ul>  

      </MDBCol>
    </MDBRow>

    <MDBRow className="mb-3">
      <MDBCol size="2">
        <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
      </MDBCol>
      <MDBCol size="10">
        <h5 className="font-weight-bold mb-3"></h5>
        <p className="grey-text">

          </p>
      </MDBCol>
    </MDBRow>
  </MDBCol>
</MDBRow>


</section>

);
}
    
