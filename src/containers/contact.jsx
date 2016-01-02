import {default as __links} from 'sources/links';
import {default as IconLinks} from 'components/icon-links';

export default React.createClass({
  getDefaultProps() {
    return {
      links: __links
    };
  },
  render() {
    const {links} = this.props;

    return (
      <div className='backdrop animated fadeIn'>
        <IconLinks items={links} classname={'circle'} />
      </div>
    );
  }
});