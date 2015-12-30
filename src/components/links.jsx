'use strict';
import React from 'react';

export default React.createClass({
  componentDidMount() {
    return this.setState({...this.props});
  },
  render() {
    const link = this.props.circles ? 'circle' : 'square';
    return (
      <ul className={`${link}s`}>
        {this.props.items.map((obj, i) => {
          return (
            <li key={i} className={link}>
              <div className='icon'>
                <a href={obj.url} target="_blank">
                  <span className={obj.icon}></span>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
});