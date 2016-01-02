import {Link} from 'react-router';

export default React.createClass({
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