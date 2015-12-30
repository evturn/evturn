export default  React.createClass({
  render() {
    const {
      width,
      icon,
      text,
      caption
    } = this.props;
    const classname = icon ? icon : 'text';
    const content = classname === 'text' ? text : '';

    return (
      <li className={width}>
        <div className='icon-accent'>
          <span className={classname}>{content}</span>
        </div>
        <div className='caption'>{caption}</div>
      </li>
    );
  }
});