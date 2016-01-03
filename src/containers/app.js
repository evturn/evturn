import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import 'sources/google-analytics';
import 'styles/style.less';

export const App = React.createClass({
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
    return (
      <div>
        <Header {...this.props} {...this.state} />
        {this.props.children}
        <Footer {...this.props} {...this.state} />
      </div>
    );
  }
});