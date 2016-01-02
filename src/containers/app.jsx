import {default as Spinner} from 'components/spinner';
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import 'sources/google-analytics';
import 'styles/style.less';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {
      page: 'home'
    };
  },
  componentWillReceiveProps(nextProps) {
    const route = nextProps.routes[1].name;
    if (this.state.page !== route) {
      return this.setState({
        page: route
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
        <Spinner />
        <Header page={page} />
        {this.props.children}
        <Footer page={page} />
      </div>
    );
  }
});