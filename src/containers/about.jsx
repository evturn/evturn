import {AboutInfo} from 'containers/about/about-info';
import {AboutStats} from 'containers/about/about-stats';
import {AboutTech} from 'containers/about/about-tech';
import {AboutBio} from 'containers/about/about-bio';
import {AboutHeader} from 'containers/about/about-header';

export default React.createClass({
  render() {
    return (
      <div className='about'>
        <AboutHeader />
        <AboutBio />
        <AboutInfo>
          <AboutTech />
          <AboutStats />
        </AboutInfo>
      </div>
    );
  }
});
