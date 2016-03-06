import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setRouteAsPage, menuVisibility, setSiteMounted } from 'actions/site';
import SiteFooter from 'components/SiteFooter';
import SiteHeader from 'components/SiteHeader';
import SiteOverlay from 'components/SiteOverlay';
import 'css/style.css';
import 'db/google-analytics';

class App extends Component {
  constructor(props) {
    super(props);
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

    return (
      <div className="site">
        <SiteOverlay open={open} toggle={menuVisibility} />

        <SiteHeader
          open={open}
          page={page}
          pages={pages}
          toggle={menuVisibility}
        />

        {this.props.children}

        <SiteFooter page={page} />
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