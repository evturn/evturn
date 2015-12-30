import {default as Spinner} from 'components/spinner';
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
// import 'sources/google-analytics';
import {getPage} from 'helpers';
import styles from 'styles/style.less';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      styles: styles
    };
  },
  getInitialState() {
    return {
      page: getPage()
    };
  },
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        page: getPage()
      });
    });
  },
  render() {

    return (
      <div>
        <Spinner/>
        <Header page={this.state.page} />
        {this.props.children}
        <Footer page={this.state.page} />
      </div>
    );
  }
});