export default React.createClass({
  getDefaultProps() {
    return {
      text: '© 2015 evturn.com built with ',
      icon: 'devicon-react-plain-wordmark'
    };
  },
  getInitialState() {
    return {
      page: this.props.page
    };
  },
  componentWillReceiveProps(newProps) {
    this.setState({
      page: newProps.page
    });
  },
  render() {
    const {
      text,
      icon
    } = this.props;
    const {page} = this.state;
    const blend = page === 'contact' ? 'blend' : '';
    const footer = `footer-${page}`;

    return (
      <footer className={footer}>
        <div className={blend}></div>
        <div className='footer-text'>
          <span className='copyright'>{text}</span>
          <span className={`icon ${icon}`}></span>
        </div>
      </footer>
    );
  }
});