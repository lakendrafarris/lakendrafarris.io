import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >HTOWN APP</CardTitle>
            <CardText>
              We designed this full stack application because Houston is very, very large. We wanted everyone to have the chance to explore what Houstonians think about their own neighborhoods. This app allows users to rate their neighborhood based on four properties: school system, entertainment scene, outdoor recreation, and home prices. After rating, users must register and login in order to make a comment and discuss their neighborhood with others.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
{/*               
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >My Recipe Hampers</CardTitle>
            <CardText>
            Simple react application that allows users to view, create, delete and update recipes.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        
        </div>


      )
    // } else if (this.state.activeTab === 1) {
    //   return (
    //     <div><h1>This is Angular</h1></div>
    //   )
    // } else if (this.state.activeTab === 2) {
    //   return (
    //     <div><h1>This is VueJS</h1></div>
    //   )
    // } else if (this.state.activeTab === 3) {
    //   return (
    //     <div><h1>This is MongoDB</h1></div>
    //   )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          {/* <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
