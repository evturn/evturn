export default React.createClass({
  getDefaultProps() {
    return {
      text: '© 2015 evturn.com built with ',
      icon: 'icon devicon-react-plain-wordmark'
    };
  },
  shouldApplyBlend(props) {
    return props.page === 'contact' ? <div className='blend'></div> : null;
  },
  getInitialState() {
    return {
      page: `footer-${this.props.page}`,
      blend: this.shouldApplyBlend(this.props)
    };
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      page: `footer-${nextProps.page}`,
      blend: this.shouldApplyBlend(nextProps)
    });
  },
  render() {
    const {text, icon} = this.props;
    const {page, blend} = this.state;

    return (
      <footer className={page}>
        {blend}
        <div className='footer-text'>
          <span className='copyright'>{text}</span>
          <span className={icon}></span>
        </div>
      </footer>
    );
  }
});