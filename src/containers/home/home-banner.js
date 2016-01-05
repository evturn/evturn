export const HomeBanner = React.createClass({
  render() {
    return (
      <div className='home-banner'>
        <h3 className='home-title'>{this.props.title}</h3>
        <h3 className='home-description'>{this.props.description}</h3>
      </div>
    );
  }
});