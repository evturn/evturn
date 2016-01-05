
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import 'sources/google-analytics';

const Wrapper = React.createClass({
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     page: nextProps.page,
  //     component: nextProps.component
  //   });
  // },
  render() {
    return (
      <div>
        <Header page={this.props.page} />
        {this.props.component}
        <Footer page={this.props.page} />
      </div>
    );
  }
});

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
    return <Wrapper page={this.state.page} component={this.props.children} />;
  }
});