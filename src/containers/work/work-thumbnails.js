import {Component} from 'react';
import {Link} from 'react-router';

export default class WorkThumbnails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const thumbnails = this.renderThumbs();
    return (
      <div className='project-thumbs'>
        <ul className='tiles'>{thumbnails}</ul>
      </div>
    );
  }
  renderThumbs() {
    return this.props.thumbs.map((obj, i) => {
      const classname = obj.id === this.props.activeId ?  'thumb-active' : 'thumb';

      return (
        <li key={i} className={classname}>
          <Link to={`work/${obj.id}`}>
            <div className='frame'>
              <img src={obj.image} />
              <div className='shadow' />
            </div>
          </Link>
        </li>
      );
    });
  }
}