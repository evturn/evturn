import {default as Carousel} from 'components/carousel';
import {setProjectCarouselSlides} from 'helpers';

export const WorkCarousel = React.createClass({
  getInitialState() {
    return {
      images: this.props.images
    };
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      images: nextProps.images
    });
  },
  render() {
    const {images} = this.state;
    const projectSlides = setProjectCarouselSlides(images);

    return <div className='project-carousel'><Carousel images={projectSlides} /></div>;
  }
});