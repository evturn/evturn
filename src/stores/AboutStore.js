import alt from '../libs/alt';
import assign from 'object-assign';
import __tech from 'sources/tech';
import AboutActions from 'actions/AboutActions';

class AboutStore {
  constructor() {
    this.bindActions(AboutActions);
    this.software = __tech;
  }
  setFeaturedTech() {
    return getFeatured(this.software);
  }
  getFeatured(dataSource) {
    const featured = [];

    for (let obj of dataSource) {
      obj.featured ? featured.push(obj) : '';
    }
    return featured;
  }
  getTechItems() {
    return this.software.filter((obj) => {
      return obj.featured;
    }).map((obj) => {
      return obj;
    });
  }
}

export default alt.createStore(AboutStore, 'AboutStore');