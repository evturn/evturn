import {default as CarouselSlide} from 'components/carousel-slide';

export default React.createClass({
  resetState(images) {
    return {
      images: images,
      active: images[0],
      counter: 0,
      enqueue: 1,
      previous: null,
      enter: null,
      leave: null
    };
  },
  beforeRender(image) {
    const {enter, leave, active} = this.state;
    if (image === enter) {
      return 'enter';
    } else if (image === leave) {
      return 'leave';
    } else if (image === active) {
      return 'active';
    } else {
      return 'inactive';
    }
  },
  beforeTransition() {
    const {counter, enqueue, images} = this.state;
    const total = images.length - 1;

    if (enqueue < total && counter !== total) {
      this.setState({counter: counter + 1, enqueue: enqueue + 1});
    } else if (enqueue === total) {
      this.setState({counter: counter + 1, enqueue: 0});
    } else if (enqueue === 0) {
      this.setState({counter: 0, enqueue: 1});
    }

    this.runTransition();
  },
  runTransition() {
    this.setState({
      active: null,
      enter: this.state.images[this.state.counter],
      leave: this.state.previous
    });

    this.afterTransition();
  },
  afterTransition() {
    setTimeout(() => {
      return this.setState({
        active: this.state.images[this.state.counter],
        previous: this.state.images[this.state.counter],
        enter: null,
        leave: null
      });
    }, 1000);
  },
  setTimer() {
    this.timer = setInterval(() => {
      this.beforeTransition();
    }, 4000);
  },
  clearTimer() {
    return clearInterval(this.timer);
  },
  restart() {
    this.clearTimer();
    this.setTimer();
  },
  getInitialState() {
    return this.resetState(this.props.images);
  },
  componentWillUnmount() {
    return this.clearTimer();
  },
  componentDidMount() {
    return this.setTimer();
  },
  componentWillReceiveProps(newProps) {
    if (this.state.images !== newProps.images) {
      this.setState(this.resetState(newProps.images));
      this.restart();
    }
  },
  render() {
    const {images} = this.state;

    return (
      <div className='carousel'>
        {images.map((image, i) => {
          const activeClass = this.beforeRender(image);

          return <CarouselSlide key={i} active={activeClass} image={image} />;
        })}
      </div>
    );
  }
});