'use strict';
require('normalize.css');
require('styles/style.less');
import React from 'react';
import { connect } from 'react-redux';

/* Data */
import { default as techSources } from 'sources/tech';
import { default as projectSources } from 'sources/projects';
import { default as linkSources } from 'sources/links';
const techData = techSources();
const projectData = projectSources();

/* Components */
import { ProjectCarousel } from 'components/work/project-carousel';
import { ProjectInfo } from 'components/work/project-info';
import { ProjectLinks } from 'components/work/project-links';
import { ProjectTech } from 'components/work/project-tech';
import { Thumbnails } from 'components/work/thumbnails';

/* Action Creators */
import { setProjectId, setProjectTech, setProjectLinks, setProjectName, setProjectDescription, setProjectImages } from 'actions/project';


export const Work = React.createClass({
  setProject(id) {
    return this.findProjectById(parseInt(id));
  },
  findTechByIds(ids) {
    const { dispatch } = this.props;
    const projectTech = [];

    for (let id of ids) {
      for (let pt of projectTech) {
        if (id === pt.td) {
          projectTech.push(pt);
        }
      }
    }

    return projectTech;
  },
  findProjectById(id = 4, fallback = 4) {
    let found = false;
    let project = null;

    projectData.map((p, i) => {
      if (p.id === id) {
        project = p
        found = true;
      } else if ((projectData.length - 1 === i) && !found && project === null) {
        project = projectData[fallback];
      }
    });

    return {
      project: {
        name: project.name,
        description: project.description,
        images: project.images,
        links: project.links,
        tech: this.findTechByIds(project.technologies),
        id: project.id
      }
    };
  },
  componentDidMount() {
    console.log(this.props);

  },
  render() {
    const { pathname } = this.props.location;
    const { dispatch } = this.props;
    const { project } = this.setProject(this.props.params.id);

    console.log(project);
    dispatch(setProjectImages(project.images));
    dispatch(setProjectName(project.name));
    dispatch(setProjectDescription(project.description));
    dispatch(setProjectId(project.id));
    dispatch(setProjectTech(project.tech));

    return (
      <div>
        <div className="project-content">
          <ProjectCarousel />
          <ProjectInfo />
          <ProjectTech />
          <ProjectLinks />
        </div>
        <Thumbnails />
      </div>
    );
  }
});