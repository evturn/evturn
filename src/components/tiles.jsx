import {Link} from 'react-router';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    const {items, path} = this.props;

    return (
      <ul className='tiles'>
        {items.map((obj, i) => {
          return (
            <li key={i} className='item'>
              <Link to={`work/${obj.id}`}>
                <div className='frame'>
                  <img className='img-scale' src={obj.thumbnail} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
});