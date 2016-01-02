import {IndexLink, Link} from 'react-router';

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
    if (this.state.open !== nextProps.open) {
      return this.setState({
        open: nextProps.open
      });
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
    const {open} = this.state;
    const openClass = open ? openClassName : '';

    return (
      <div className={openClass}>
        <nav className='menu'>
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
        </nav>
      </div>
    );
  }
});