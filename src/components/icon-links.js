import React from 'react';
import {default as IconLink} from 'components/icon-link';

export default React.createClass({
  render() {
    const {items, classname} = this.props;

    return (
      <ul className={`${classname}s`}>
        {items.map((obj, i) => {
          return (
            <IconLink
              key={i}
              classname={classname}
              icon={obj.icon}
              url={obj.url}
            />
          );
        })}
      </ul>
    );
  }
});