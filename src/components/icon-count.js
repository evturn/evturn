import {default as Icon} from 'components/icon';

export const CounterItem = React.createClass({
  increment() {
    if (this.state.count >= this.props.number) {
      return this.setState({
        count: this.props.number
      });
    } else {
      this.incTimer = setTimeout(() => {
        this.setState({
          count: this.state.count + 50
        });
        this.increment();
      }, 50);
    }
  },
  getInitialState() {
    return {
      count: 0
    };
  },
  componentDidMount() {
    return this.increment();
  },
  componentWillUnmount() {
    return clearTimeout(this.incTimer);
  },
  render() {
    const {count} = this.state;
    const {caption, width} = this.props;
    return (
      <Icon
        text={count}
        classname={'text'}
        caption={caption}
        width={width}
      />
    );
  }
});

export const CounterItems = React.createClass({
  getInitialState() {
    return {
      ...this.props
    };
  },
  render() {
    const {width, items} = this.state;

    return (
      <ul className='flex'>
        {items.map((obj, i) => {
          return (
            <CounterItem
              key={i}
              number={obj.number}
              caption={obj.caption}
              width={width}
            />
          );
        })}
      </ul>
    );
  }
});