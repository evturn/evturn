export default  React.createClass({
  render() {
    const {width, classname, icon, text, caption} = this.props;

    return (
      <li className={width}>
        <div className='icon-accent'>
          <span className={classname}>{text}</span>
        </div>
        <div className='caption'>{caption}</div>
      </li>
    );
  }
});