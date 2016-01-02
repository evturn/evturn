import {AboutTitle} from 'containers/about/about-title';

export const AboutBio = React.createClass({
  getDefaultProps() {
    return {
      text: 'As the web continues to evolve, exploring solutions and strategies for building rich applications is not only essential but provides an exciting opportunity for design innovation.',
      title: 'Development'
    };
  },
  render() {
    const {text, title} = this.props;

    return (
      <div className='bio'>
        <AboutTitle title={title} />
        <div className='paragraph'>{text}</div>
      </div>
    );
  }
});