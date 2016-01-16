import React from 'react';

export default React.createClass({
  render() {
    const {classname, url, icon} = this.props;

    return (
      <li className={classname}>
        <div className='icon'>
          <a href={url} target="_blank">
            <span className={icon}></span>
          </a>
        </div>
      </li>
    );
  }
});