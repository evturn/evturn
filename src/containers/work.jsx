import {default as Carousel} from 'components/carousel';
import {TechItems as ProjectTech} from 'components/icon-tech';
import {default as Thumbnails} from 'components/thumbnails';
import {default as IconLinks} from 'components/icon-links';
import {setProjectCarouselSlides, setProjectThumbnails, getRelativePath, setProject, setFeaturedProjects} from 'helpers';

const WorkThumbnails = React.createClass({
  getDefaultProps() {
    return {
      projects: setFeaturedProjects()
    };
  },
  getInitialState() {
    return {
      activeId : this.props.activeId
    };
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      activeId: nextProps.activeId
    });
  },
  render() {
    const {projects} = this.props;
    const {activeId} = this.state;
    const thumbs = setProjectThumbnails(projects);

    return (
      <div className='project-thumbs'>
        <Thumbnails projects={thumbs} activeId={activeId} />
      </div>
    );
  }
});

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
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
  setupLinks(links) {
    return links ? <IconLinks items={links} classname={'square'} /> : '';
  },
  render() {
    const {images, name, description, links, tech, id} = this.state.project;
    const {activeId} = this.state;
    const projectLinks = this.setupLinks(links);
    const projectSlides = setProjectCarouselSlides(images);

    return (
      <div className='work'>
        <div className='project-header'>Projects</div>
        <WorkThumbnails activeId={activeId} />
        <div className='project-carousel'>
          <Carousel images={projectSlides} />
        </div>
        <div className='project-info'>
          <div className='project-title'>{name}</div>
          <div className='project-description'>{description}</div>
          <div className='project-links'>{projectLinks}</div>
        </div>
        <div className='project-tech'>
          <div className='project-title'>Made with</div>
          <ProjectTech items={tech} width={'item-25'} />
        </div>
      </div>
    );
  }
});