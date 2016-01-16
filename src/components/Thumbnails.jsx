import React, {Component} from 'react';
import Thumbnail from 'components/Thumbnail';

export default class Thumbnails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const thumbnails = this.renderThumbnails();
    return (
      <div className='project-thumbs'>
        <ul className='tiles'>{thumbnails}</ul>
      </div>
    );
  }
  renderThumbnails() {
    return this.props.thumbs.map((obj, i) => {
      const classname = obj.id === this.props.activeId ?  'thumb-active' : 'thumb';
      const path = `work/${obj.id}`;

      return (
        <Thumbnail
          key={i}
          classname={classname}
          path={path}
          image={obj.image}
        />
      );
    });
  }
}