import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              {/* <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar" */}
                <img src={process.env.PUBLIC_URL + 'portfoliopic.jpeg'} alt="portfoliopic" />
                {/* style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{paddingTop: '2em'}}>LaKendra Farris</h2>
            <h4 style={{color: 'grey'}}>Junior Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> I am an enthusiastic software engineer that graduated Digital Crafts Houston in July 2020 and is eager to join the technology industry. As I am an Army veteran, I enjoy being challenged and engaged with projects that require me to work outside my comfort and knowledge set while working alone or in a collaborative environment. My passion for creating practical proficient software is what drives me to keep striving to deliver stellar work ethic and drive. I am a skilled professional with proven leadership and supervisory skills, outstanding communication and interpersonal skills, and a friendly, pleasant demeanor with excellent social skills to encourage a healthy atmosphere.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1625 Main st Apt 1604 Houston Tx, 77002</p>
            <h5>Phone</h5>
            <p>(469) 558-3728</p>
            <h5>Email</h5>
            <p>lakendrafarris@aol.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
          

    
              startYear={2020}
              endYear={2020}
              schoolName="Digital Crafts"
              schoolDescription="Software engineering training program covering full-stack development including JavaScript, Python, an emphasis on cutting-edge frameworks like React/Redux and server-side technologies including Node.js, Express, and PostgreSQL.
              "
               />

               <Education
                 startYear={2013}
                 endYear={2010}
                 schoolName="Collin County Community College"
                 schoolDescription="Associates Degree in Associate of Arts Business field of study , GPA 3.0 "
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2016}
              endYear={2019}
              jobName="AMERICAN AIRLINES/ENVOY"
              jobDescription="As a Stewardess , I ensured adherence to FAA and company regulations to ensure safe transport of passengers,
              completed 2500+ hours of domestic and international flights including first class service experience,
              mentored new flight attendants, providing training in customer service and safety techniques, 
              assisted flight crew with policies and procedures and assisted in safely handling special needs passengers while providing services of comfort throughout the duration of flights, 
              and operated all emergency equipment and communicated emergency procedures to onboard passengers 
              "/>

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="BANK OF AMERICA"
                jobDescription="As a Claims Operation Analyst, I investigated daily incoming claims using various systems and tools, 
                maintained internal operational and financial controls and ensured adherence for all assigned cases,
                ensured that all cases are resolved in compliance with industry regulations, bank procedures, and integrity levels of the department's case management system and financial controls ,
                resolved differences and sought mitigation in order to diminish losses due to delinquent customers, research and resolve other general customer account inquiries and service requests received from various channels while providing exceptional customer service at all times
                 "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;