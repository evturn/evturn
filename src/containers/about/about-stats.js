import {CounterItems} from 'components/icon-count';
import {AboutTitle} from 'containers/about/about-title';
import {default as __stats} from 'sources/stats';

export const AboutStats = React.createClass({
  getDefaultProps() {
    return {
      statsTitle: 'Statistics',
      stats: __stats
    };
  },
  render() {
    const {stats, statsTitle} = this.props;

    return (
      <div className='about-stats'>
        <AboutTitle title={statsTitle} />
        <CounterItems items={stats} width={'item-50'} />
      </div>
    );
  }
});