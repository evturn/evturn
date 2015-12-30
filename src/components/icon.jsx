export default  React.createClass({
  render() {
    const content = this.props.icon ? <span className={this.props.icon}></span> : this.props.text;

    return (
      <li className={this.props.width}>
        <div className='icon-accent'>{content}</div>
        <div className='caption'>{this.props.caption}</div>
      </li>
    );
  }
});