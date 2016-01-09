import {Component} from 'react';
import {WorkCarousel} from 'containers/work/work-carousel';
import {WorkThumbnails} from 'containers/work/work-thumbnails';
import {WorkTech} from 'containers/work/work-tech';
import {WorkMeta} from 'containers/work/work-meta';
import AppStore from 'stores/AppStore';
import AppActions from 'actions/AppActions';

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: AppActions.setProject(),
      activeId: props.params.id
    };
  }
  componentWillReceiveProps(nextProps) {
    return AppActions.setProject(nextProps.params.id);
  }
  render() {
    const {
      images, name, description,
      links, tech, id
    } = this.state.project;

    return (
      <div className='work'>
        <div className='project-header'>Projects</div>
        <WorkThumbnails activeId={this.state.activeId} />
        <WorkCarousel images={images} />
        <WorkMeta name={name} description={description} links={links} />
        <WorkTech items={tech}/>
      </div>
    );
  }
}