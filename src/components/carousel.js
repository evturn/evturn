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
      return 'slide enter';
    } else if (image === leave) {
      return 'slide leave';
    } else if (image === active) {
      return 'slide active';
    } else {
      return 'slide inactive';
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
    this.timeout = setTimeout(() => {
      return this.setState({
        active: this.state.images[this.state.counter],
        previous: this.state.images[this.state.counter],
        enter: null,
        leave: null
      });
    }, 1000);
  },
  start() {
    this.interval = setInterval(() => {
      this.beforeTransition();
    }, 4000);
  },
  clearTimers() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  },
  getInitialState() {
    return this.resetState(this.props.images);
  },
  componentWillUnmount() {
    return this.clearTimers();
  },
  componentWillReceiveProps(nextProps) {
    if (this.state.images !== nextProps.images) {
      this.clearTimers();
      this.setState(this.resetState(nextProps.images));
      this.start();
    }
  },
  render() {
    const {images} = this.state;

    return (
      <div className='carousel'>
        {images.map((image, i) => {
          return <div key={i} className={this.beforeRender(image)}><img src={image} /></div>;
        })}
      </div>
    );
  }
});