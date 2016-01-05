
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import 'sources/google-analytics';

export const App = React.createClass({
  componentWillReceiveProps(nextProps) {
    const route = nextProps.routes[1].name;

    if (this.state.page !== route) {
      this.setState({ page: route });
    }
  },
  getInitialState() {
    return { page: this.props.routes[1].name };
  },
  componentDidMount() {
    this.setState({ page: this.props.routes[1].name });
  },
  render() {
    const site = (
      <div>
        <Header page={this.state.page} />
        {this.props.children}
        <Footer page={this.state.page} />
      </div>
    );
    return site;
  }
});