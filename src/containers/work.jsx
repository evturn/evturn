import {default as Carousel} from 'components/carousel';
import {TechItems as ProjectTech} from 'components/icon-tech';
import {default as Tiles} from 'components/tiles';
import {default as Links} from 'components/links';
import {setProject, setFeaturedProjects} from 'helpers';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  hasLinks(links) {
    return links === null ? '' : <Links items={links} circles={false} />;
  },
  getDefaultProps() {
    return {
      projects: setFeaturedProjects()
    };
  },
  getInitialState() {
    return {
      project: setProject()
    };
  },
  componentWillReceiveProps(newProps) {
    return this.setState({
      project: setProject(newProps.params.id)
    });
  },
  componentWillMount() {
    if (this.props.params.projectId) {
      return this.setState({
        project: setProject(this.props.params.id)
      });
    }
  },
  render() {
    const {projects} = this.props;
    const {
      images,
      name,
      description,
      links,
      tech
    } = this.state.project;
    const slides = images.map((image) => { return `src/${image}`; });

    return (
      <div className='work'>
        <div className='project-carousel'>
          <Carousel images={slides} />
        </div>
        <div className='project-details'>
          <div className='project-info'>
            <div className='project-title'>{name}</div>
            <div className='project-description'>{description}</div>
          </div>
          <div className='project-links'>
            {this.hasLinks(links)}
          </div>
          <div className='project-tech'>
            <div className='project-title'>Made with</div>
            <ProjectTech items={tech} width={'item-25'} />
          </div>
        </div>
        <div className='projects'>
          <div className='projects-header'>Projects</div>
          <Tiles items={projects}/>
        </div>
      </div>
    );
  }
});