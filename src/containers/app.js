
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
  componentDidMount() {
    this.setState({ page: this.props.routes[1].name });
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