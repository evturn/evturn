import {Component} from 'react';
import Spinner from 'components/spinner';
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import 'sources/google-analytics';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: props.routes[1].name ,
      hidden: true
    };
  }
  componentWillReceiveProps(nextProps) {
    const route = nextProps.routes[1].name;

    if (this.state.page !== route) {
      this.setState({ page: route });
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hidden: false
      });
    }, 1000);
  }
  render() {
    const visibility = this.state.hidden ? 'hidden' : '';
    return (
      <div>
        <Spinner />
        <Header classname={visibility} page={this.state.page} />
        {this.props.children}
        <Footer classname={visibility} page={this.state.page} />
      </div>
    );
  }
}