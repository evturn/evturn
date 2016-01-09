import AltContainer from 'alt-container';
import {Component} from 'react';
import AppStore from 'stores/AppStore';
import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
import 'sources/google-analytics';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { page: props.routes[1].name };
  }
  componentWillReceiveProps(nextProps) {
    const route = nextProps.routes[1].name;

    if (this.state.page !== route) {
      this.setState({ page: route });
    }
  }
  render() {
    return (
      <div>
      <AltContainer store={AppStore}>
        <Header page={this.state.page} />
        {this.props.children}
        <Footer page={this.state.page} />
      </AltContainer>
      </div>
    );
  }
}