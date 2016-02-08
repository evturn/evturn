import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateRoute } from 'actions/app';
import Footer from 'components/Footer';
import Header from 'components/Header';
import 'css/base.less';
import 'sources/google-analytics';

class App extends Component {
  constructor(props) {
    super(props);

    this.dispatch = props.dispatch;
  }
  componentDidMount() {
    this.dispatch(updateRoute(this.props.routes[1].name));
  }
  componentWillReceiveProps(nextProps) {
    const route = nextProps.routes[1].name;

    if (this.props.page !== nextProps.route) {
      this.dispatch(updateRoute(route));
    }
  }
  render() {
    return (
      <div>
        <Header page={this.props.page} />
        {this.props.children}
        <Footer page={this.props.page} />
      </div>
    );
  }
}

App.propTypes = {
  page: PropTypes.string,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return { page: state.site.page };
}

export default connect(mapStateToProps)(App);