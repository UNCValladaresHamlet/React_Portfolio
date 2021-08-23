import React from 'react';
import Project_1 from '../../img/portfolio/Project_1.png'
import Project_2 from '../../img/portfolio/Project_2.PNG'
import password from '../../img/portfolio/password.png'
import schedule from '../../img/portfolio/schedule.png'
import note_taker from '../../img/portfolio/note_taker.PNG'
import fitness_tracker from '../../img/portfolio/fitness_tracker.PNG'


import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdb-react-ui-kit';

export default function Portfolio() {
  return (
    
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>

        <MDBCard class= ".card-img-top" alignment='center'>
          <MDBCardImage
            src= {Project_1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Inspired Meal Prep </MDBCardTitle>
            <MDBCardText>
            Our goal was to create a website that provides users a way to get a personalized meal plan for the week based on the user's daily calorie goal, diet, and any food they would want to exclude. Also, they can save their favorite recipes on a separate page for later. The website should suggest an easy to digest meal plan that would make it simple to get a curated list of recipes that fit the users preferences. Every day the user gets a new motivational quote to inspire them.

            </MDBCardText>

            <div className="text-center">
            <a href="https://anthonyplanisek.github.io/Project-1/">Inspired Meal Prep Link</a>
            </div>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>

        <MDBCard class= ".card-img-top" alignment='center'>
          <MDBCardImage
            src= {Project_2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Traveler's Landing</MDBCardTitle>
            <MDBCardText>
            This is a website generated for North Carolina travelers on a budget. When the traveler enters what location they would like to travel to the site will provide museums, parks, trails, and restaurants in the area. The traveler will be able choose if they would like to view trails, parks, museums, or restaurants. The traveler will be provided with the address, cost, hours, and name of the place which they can save to their profile. The traveler must create a profile and login to search.
            </MDBCardText>

            <div className="text-center">
            <a href="https://dream-vacation2021.herokuapp.com/">Traveler's Landing Link</a>
            </div>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard class= ".card-img-top" alignment='center'>
          <MDBCardImage
            src= {password}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Password Generator</MDBCardTitle>
            <MDBCardText>
            This week’s homework requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

            </MDBCardText>

            <div className="text-center">
            <a href="https://uncvalladareshamlet.github.io/Password_Generator/">Password Generator Link</a>
            </div>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard class= ".card-img-top" alignment='center'>
          <MDBCardImage
            src= {schedule}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Work Day Scheduler</MDBCardTitle>
            <MDBCardText>
            Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
            </MDBCardText>

            <div className="text-center">
            <a href="https://uncvalladareshamlet.github.io/HW_5_WorkDayScheduler/">Workday Scheduler Link</a>
            </div>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard class= ".card-img-top" alignment='center'>
          <MDBCardImage
            src= {note_taker}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Note Taker</MDBCardTitle>
            <MDBCardText>
            An app called Note Taker that can be used to write, save, and delete notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file. Users are also able to delete notes as they need as well.
            </MDBCardText>

            <div className="text-center">
            <a href="https://note-taker-app44.herokuapp.com/">Note Taker Link</a>
            </div>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard class= ".card-img-top" alignment='center'>
          <MDBCardImage
            src= {fitness_tracker}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Fitness Tracker</MDBCardTitle>
            <MDBCardText>
            An app called Fitness Tracker that can be used to view, create, and track daily workouts. This app enables you to log multiple exercises in a workout on a given day. It also can track the name, type, weight, sets, reps, and duration of your exercises. 
            </MDBCardText>

            <div className="text-center">
            <a href="https://fast-fjord-59620.herokuapp.com/">Fitness Tracker Link</a>
            </div>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
