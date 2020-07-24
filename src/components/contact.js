import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>LaKendra Farris</h2>
            {/* <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
               /> */}
               <img src={process.env.PUBLIC_URL + 'portfoliopic.jpeg'} alt="portfoliopic" />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am an enthusiastic software engineer attending Digital Crafts Houston to be completed in July 2020 and is eager to join the technology industry. As I am an Army veteran, I enjoy being challenged and engaged with projects that require me to work outside my comfort and knowledge set while working alone or in a collaborative environment. My passion for creating practical proficient software is what drives me to keep striving to deliver stellar work ethic and drive. I am a skilled professional with proven leadership and supervisory skills, outstanding communication and interpersonal skills, and a friendly, pleasant demeanor with excellent social skills to encourage a healthy atmosphere. </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (469) 558-3728
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (469) 558-3728
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    lakendrafarris@aol.com
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem> */}


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
