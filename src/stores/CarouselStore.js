import alt from '../libs/alt';
import CarouselActions from 'actions/CarouselActions';

class CarouselStore {
  constructor() {
    this.bindActions(CarouselActions);

    this.images = [];
    this.interval = null;
    this.timeout = null;
  }
  static getClassname(image) {
    if (image === this.getState().enter) {
      return 'slide enter';
    } else if (image === this.getState().leave) {
      return 'slide leave';
    } else if (image === this.getState().active) {
      return 'slide active';
    } else {
      return 'slide inactive';
    }
  }
  insertImageGroup(images) {
    this.images = images;
    this.total = images.length - 1;
    this.counter = 0;
    this.enqueue = 1;
    this.active = images[0];
    this.previous = null;
    this.enter = null;
    this.leave = null;
    this.performCleanUp();
    this.startLoop();
  }
  startLoop() {
    this.interval = setInterval(() => {
      this.runTransition();
    }, 4000);
  }
  performCleanUp() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }
  runTransition() {
    if (this.enqueue < this.total && this.counter !== this.total) {
      this.counter = this.counter + 1;
      this.enqueue = this.enqueue + 1;
    } else if (this.enqueue === this.total) {
      this.counter = this.counter + 1;
      this.enqueue = 0;
    } else if (this.enqueue === 0) {
      this.counter = 0;
      this.enqueue = 1;
    }

    this.enter = this.images[this.counter];
    this.setState({
      images: this.images,
      active: null,
      enter: this.enter,
      leave: this.previous
    });

    this.timeout = setTimeout(() => {
      this.runDissolve();
    }, 1000);
  }

  runDissolve() {
    this.previous = this.images[this.counter];
    this.active = this.images[this.counter];
    this.setState({
      active: this.active,
      previous: this.previous,
      enter: null,
      leave: null
    });
  }
}

export default alt.createStore(CarouselStore, 'CarouselStore');