import {Component} from 'react';
import Spinner from 'components/spinner';
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import 'sources/google-analytics';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: props.routes[1].name,
      header: null,
      view: null,
      footer: null
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
        header: <Header page={this.state.page} />,
        view: this.props.children,
        footer: <Footer page={this.state.page} />
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <Spinner />
        {this.state.header}
        {this.state.view}
        {this.state.footer}
      </div>
    );
  }
}