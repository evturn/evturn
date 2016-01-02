import {default as IconLinks} from 'components/icon-links';

export const WorkMeta = React.createClass({
  getInitialState() {
    return {
      ...this.props
    };
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      ...nextProps
    });
  },
  setupLinks() {
    const {links} = this.state;
    console.log(links);
    if (links === null) {
      return null;
    }
    return <div className='project-links'><IconLinks items={links} classname={'square'} /></div>;
  },
  render() {
    const {name, description} = this.state;
    const projectLinks = this.setupLinks();

    return (
      <div className='project-info'>
        <div className='project-title'>{name}</div>
        <div className='project-description'>{description}</div>
        {projectLinks}
      </div>
    );
  }
});