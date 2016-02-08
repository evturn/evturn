import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { init, setRouteAsPage, menuVisibility, setSiteMounted } from 'actions/site';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SiteOverlay from 'components/SiteOverlay';
import 'css/base.less';
import 'sources/google-analytics';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    init(this.props.routes[1].name);
  }
  componentDidMount() {
    setSiteMounted();
  }
  componentWillReceiveProps(nextProps) {
    const page = nextProps.routes[1].name;

    if (page !== this.props.page) {
      setRouteAsPage(page);
    }
  }
  render() {
    const { pages, page, open, mounted } = this.props;

    if (!mounted) {
      return <div />
    }

    return (
      <div>
        <SiteOverlay
          open={open}
          toggle={menuVisibility}
        />
        <Header
          open={open}
          page={page}
          pages={pages}
          toggle={menuVisibility}
        />
        {this.props.children}
        <Footer
          page={page}
        />
      </div>
    );
  }
}

App.propTypes = {
  page: PropTypes.string,
  pages: PropTypes.array,
  open: PropTypes.bool,
  mounted: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    page: state.site.page,
    pages: state.site.pages,
    open: state.site.open,
    mounted: state.site.mounted
  };
}

export default connect(mapStateToProps)(App);