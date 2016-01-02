import {IndexLink, Link} from 'react-router';
import {getRelativePath} from 'helpers';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      pages: [
        {name: 'Home',    route: '/'      , id: 1},
        {name: 'Work',    route: 'work'   , id: 2},
        {name: 'About',   route: 'about'  , id: 3},
        {name: 'Contact', route: 'contact', id: 4}
      ],
      openClassName: 'open'
    };
  },
  getInitialState() {
    return {
      page: this.props.page,
      open: this.props.initialOpen
    };
  },
  handleClick() {
    const newOpenState = {
      open: !this.state.open
    };

    this.setState(newOpenState);
    this.props.callbackParent(newOpenState);
  },
  componentWillReceiveProps(nextProps) {
    const {open, page} = nextProps;
    if (this.state.open !== open) {
      this.setState({open});
    }

    if (this.state.page !== page) {
      this.setState({page});
    }
  },
  setPageLinks(page) {
    const {route, name, id} = page;

    switch (id) {
      case 1:
        return <IndexLink to={route}>{name}</IndexLink>;
      default:
        return <Link to={route}>{name}</Link>;
    }
  },
  render() {
    const {pages, openClassName} = this.props;
    const {open, page} = this.state;
    const openClass = open ? openClassName : '';

    return (
      <header>
        <div className={`logo-${page}`}>
          <img src='src/assets/images/site/ev-av.png' />
        </div>
        <nav className={openClass}>
          <div className={`burger-${page}`} onClick={this.handleClick}>
            <span className='fa fa-bars'></span>
          </div>
          <div className='menu'>
            <div className='menu-header'>
              <div className='menu-icon' onClick={this.handleClick}>
                <span className='fa fa-times'></span>
              </div>
            </div>
            <ul className='flex'>
              {pages.map((page, i) => {
                return (
                  <li key={i} className='menu-item' onClick={this.handleClick}>
                    {this.setPageLinks(page)}
                  </li>
                  );
              })}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
});