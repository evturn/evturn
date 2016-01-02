
const Blend = React.createClass({
  render() {
    return <div className='blend'></div>;
  }
});

export default React.createClass({
  getDefaultProps() {
    return {
      text: '© 2015 evturn.com built with ',
      icon: 'devicon-react-plain-wordmark'
    };
  },
  shouldApplyBlend(props) {
    return props.page === 'contact';
  },
  getInitialState() {
    return {
      page: this.props.page,
      blend: this.shouldApplyBlend(this.props)
    };
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      page: nextProps.page,
      blend: this.shouldApplyBlend(nextProps)
    });
  },
  render() {
    const {text, icon} = this.props;
    const {page, blend} = this.state;
    const gradient = blend ? <Blend /> : '';

    return (
      <footer className={`footer-${page}`}>
        {gradient}
        <div className='footer-text'>
          <span className='copyright'>{text}</span>
          <span className={`icon ${icon}`}></span>
        </div>
      </footer>
    );
  }
});