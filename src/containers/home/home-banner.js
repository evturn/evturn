export const HomeBanner = React.createClass({
  render() {
    const {title, description} = this.props;

    return (
      <div className='home-banner'>
        <h3 className='home-title'>{title}</h3>
        <h3 className='home-description'>{description}</h3>
      </div>
    );
  }
});

