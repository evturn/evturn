import {IndexLink, Link} from 'react-router';
import {getRelativePath} from 'helpers';

export default React.createClass({
  getDefaultProps() {
    return {
      visible: { 'right': '0' },
      hidden: { 'right': '-21em' },
      pages: [
        { name: 'Home',    route: '/'      , id: 1 },
        { name: 'Work',    route: 'work'   , id: 2 },
        { name: 'About',   route: 'about'  , id: 3 },
        { name: 'Contact', route: 'contact', id: 4 }
      ]
    };
  },
  getInitialState() {
    return {
      page: this.props.page,
      open: this.props.open
    };
  },
  handleClick() {
    this.props.callbackParent({ open: !this.state.open });
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
      page: nextProps.page
    });
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
    const open = this.state.open ? this.props.visible : this.props.hidden;

    return (
      <header>
        <div className={`logo-${this.state.page}`}>
          <img src='src/assets/images/site/ev-av.png' />
        </div>
        <nav>
          <div className={`burger-${this.state.page}`} onClick={this.handleClick}>
            <span className='fa fa-bars'></span>
          </div>
          <div style={open} className='menu'>
            <div className='menu-header'>
              <div className='menu-icon' onClick={this.handleClick}>
                <span className='fa fa-times'></span>
              </div>
            </div>
            <ul className='flex'>
              {this.props.pages.map((page, i) => {
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