import {History} from 'react-router';
import {default as Spinner} from 'components/spinner';
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
// import 'sources/google-analytics';
import {getPage} from 'helpers';
import 'styles/style.less';

export default React.createClass({
  mixins: [History],
  showSpinner() {
    return <Spinner/>;
  },
  getInitialState() {
    return {
      page: this.props.routes[1].name
    };
  },
  componentWillReceiveProps(newProps) {
    const newPage = newProps.routes[1].name;
    if (this.state.page !== newPage) {
      return this.setState({
        page: newPage
      });
    }
  },
  componentDidMount() {
    return this.setState({
      page: this.props.routes[1].name
    });
  },
  render() {
    const {page} = this.state;

    return (
      <div>
        <Spinner/>
        <Header page={page} />
        {this.props.children}
        <Footer page={page} />
      </div>
    );
  }
});