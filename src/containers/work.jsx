import {default as Carousel} from 'components/carousel';
import {TechItems as ProjectTech} from 'components/icon-tech';
import {default as Tiles} from 'components/tiles';
import {default as IconLinks} from 'components/icon-links';
import {getRelativePath, setProject, setFeaturedProjects} from 'helpers';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
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
  componentWillReceiveProps(nextProps) {
    return this.setState({
      project: setProject(nextProps.params.id)
    });
  },
  componentWillMount() {
    if (this.props.params.projectId) {
      return this.setState({
        project: setProject(this.props.params.id)
      });
    }
  },
  getRelativePath(absolutePath) {
    const prefix = 'src/assets/';

    return `${prefix}${absolutePath}`;
  },
  setupSlides(images) {
    return images.map((image) => {
      return this.getRelativePath(image);
    });
  },
  setupThumbnails(projects) {
    return projects.map((project) => {
      return {
        id: project.id,
        image: this.getRelativePath(project.thumbnail)
      };
    });
  },
  setupLinks(links) {
    return links ? <IconLinks items={links} classname={'square'} /> : '';
  },
  render() {
    const {images, name, description, links, tech, id} = this.state.project;
    const {projects} = this.props;
    const thumbs = this.setupThumbnails(projects);
    const projectLinks = this.setupLinks(links);
    const projectSlides = this.setupSlides(images);

    return (
      <div className='work'>
        <div className='project-header'>Projects</div>
        <div className='project-thumbs'>
          <Tiles projects={thumbs} activeId={id} />
        </div>
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