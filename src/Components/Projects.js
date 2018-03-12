import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }


  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return(
          <ProjectItem key={project.title} onDelete={this.deleteProject.bind(this)} project={project} />
        )
      })
    }
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  //PropTypes is deprecated use npm module prop-types
    // projects: React.PropTypes.array,
    // onDelete: React.PropTypes.func
}

export default Projects;
