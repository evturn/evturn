import {TechItems} from 'components/icon-tech';
import {AboutTitle} from 'containers/about/about-title';
import {getTechItems} from 'helpers';

export const AboutTech = React.createClass({
  getDefaultProps() {
    return {
      techTitle: 'Tools',
      tech: getTechItems()
    };
  },
  render() {
    const {techTitle, tech} = this.props;

    return (
      <div className='about-tech'>
        <AboutTitle title={techTitle} />
        <TechItems items={tech} width={'item-20'} />
      </div>
    );
  }
});