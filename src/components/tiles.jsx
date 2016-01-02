import {Link} from 'react-router';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    const {projects, active} = this.props;

    return (
      <ul className='tiles'>
        {projects.map((obj, i) => {
          const activeClass = obj.id === active ? 'thumb-active' : 'thumb';

          return (
            <li key={i} className={activeClass}>
              <Link to={`work/${obj.id}`}>
                <div className='frame'>
                  <img src={obj.image} />
                  <div className='shadow' />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
});