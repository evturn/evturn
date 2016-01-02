import {WorkCarousel} from 'containers/work/work-carousel';
import {WorkThumbnails} from 'containers/work/work-thumbnails';
import {WorkTech} from 'containers/work/work-tech';
import {WorkMeta} from 'containers/work/work-meta';
import {setProject} from 'helpers';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      title: 'Projects'
    };
  },
  getInitialState() {
    return {
      project: setProject(),
      activeId: this.props.params.id
    };
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      project: setProject(nextProps.params.id),
      activeId: nextProps.params.id
    });
  },
  componentWillMount() {
    if (this.props.params.id) {
      return this.setState({
        project: setProject(this.props.params.id),
        activeId: this.props.params.id
      });
    }
  },
  render() {
    const {title} = this.props;
    const {images, name, description, links, tech, id} = this.state.project;
    const {activeId} = this.state;

    return (
      <div className='work'>
        <div className='project-header'>{title}</div>
        <WorkThumbnails activeId={activeId} />
        <WorkCarousel images={images} />
        <WorkMeta name={name} description={description} links={links} />
        <WorkTech items={tech}/>
      </div>
    );
  }
});