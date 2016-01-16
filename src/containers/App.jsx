import React from 'react';
import Footer from 'components/footer';
import Header from 'components/header';
import 'styles/base.less';
import 'sources/google-analytics';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: props.routes[1].name
    };
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
        <Header page={this.state.page} />
        {this.props.children}
        <Footer page={this.state.page} />
      </div>
    );
  }
}