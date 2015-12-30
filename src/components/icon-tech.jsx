import {default as Icon} from 'components/icon';

export const TechItems = React.createClass({
  getDefaultProps() {
    return {
      width: 'item'
    };
  },
  render () {
    const {width, items} = this.props;

    return (
      <ul className='flex'>
        {items.map((obj, i) => {
          return (
            <Icon
              key={i}
              icon={obj.icon}
              caption={obj.name}
              width={width}
            />
          );
        })}
      </ul>
    );
  }
});