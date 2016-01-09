import {Component} from 'react';
import Slide from 'components/Slide';
import CarouselStore from 'stores/CarouselStore';
import CarouselActions from 'actions/CarouselActions';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.images !== nextProps.images) {
      CarouselActions.insertImageGroup(nextProps.images);
    }
  }
  componentWillUnmount() {
    CarouselActions.performCleanUp();
  }
  componentWillMount() {
    CarouselActions.insertImageGroup(this.props.images);
  }
  render() {
    const slides = this.renderSlides(this.props.images);

    return (
      <div className='project-carousel'>
        <div className='carousel'>
          {slides}
        </div>
      </div>
    );
  }
  renderSlides(images) {
    return images.map((image, i) => {
      const classname = CarouselStore.getClassname(image);

      return <Slide key={i} image={image} classname={classname} />;
    });
  }
}