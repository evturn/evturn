import {default as Thumbnail} from 'components/thumbnail';
import {setProjectThumbnails, setFeaturedProjects} from 'helpers';

export const WorkThumbnails = React.createClass({
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
        <ul className='tiles'>
          {thumbs.map((obj, i) => {
            return <Thumbnail key={i} project={obj} activeId={activeId} />;
          })}
        </ul>
      </div>
    );
  }
});