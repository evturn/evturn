import {Link} from 'react-router';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render() {
    const {items} = this.props;

    return (
      <ul className='tiles'>
        {items.map((obj, i) => {
          return (
            <li key={i} className='tile'>
              <Link to={`work/${obj.id}`}>
                <div className='frame'>
                  <img className='img-scale' src={`src/${obj.thumbnail}`} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
});