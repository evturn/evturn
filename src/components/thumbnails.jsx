import {Link} from 'react-router';

const Thumbnail = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {
      classname: 'thumb',
      activeId: this.props.activeId
    };
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      activeId: nextProps.activeId
    });
  },
  applyActive(id) {
    return id !== this.state.activeId ? 'thumb' : 'thumb-active';
  },
  render() {
    const {id, image} = this.props.project;
    const classname = this.applyActive(id);

    return (
      <li className={classname}>
        <Link to={`work/${id}`}>
          <div className='frame'>
            <img src={image} />
            <div className='shadow' />
          </div>
        </Link>
      </li>
    );
  }
});

export default React.createClass({
  getInitialState() {
    return {
      activeId: this.props.activeId
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

    return (
      <ul className='tiles'>
        {projects.map((obj, i) => {
          return (
            <Thumbnail
              key={i}
              project={obj}
              activeId={activeId}
            />
          );
        })}
      </ul>
    );
  }
});