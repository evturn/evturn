import React from 'react';
import {IndexLink, Link} from 'react-router';
import FontIcon from 'components/FontIcon';
import {getRelativePath} from 'helpers';
import classNames from 'classnames/bind';
import styles from 'styles/components/nav.less';

const cx = classNames.bind(styles);

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.pages = [
      { name: 'Home',    route: '/'      , id: 1 },
      { name: 'Work',    route: 'work'   , id: 2 },
      { name: 'About',   route: 'about'  , id: 3 },
      { name: 'Contact', route: 'contact', id: 4 }
    ];

    this.state = {
      page: props.page,
      open: props.open
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
      page: nextProps.page
    });
  }
  setPageLinks(page) {
    const {route, name, id} = page;

    switch (id) {
      case 1:
        return <IndexLink to={route}>{name}</IndexLink>;
      default:
        return <Link to={route}>{name}</Link>;
    }
  }
  render() {
    const open = cx({
      'menu': true,
      'in': this.state.open,
      'out': !this.state.open
    });

    return (
      <header>
        <div
          className={cx(`logo-${this.state.page}`)}>
          <img src='src/assets/images/site/ev-av.png' />
        </div>
        <nav>
          <div
            className={cx(`burger-${this.state.page}`)}
            onClick={() => this.props.toggleMenu()}>
            <FontIcon type={'fa'} name={'fa-bars'} />
          </div>
          <div className={open}>
            <div className={cx('menu-header')}>
              <div
                className={cx('menu-icon')}
                onClick={() => this.props.toggleMenu()}>
                <FontIcon type={'fa'} name={'fa-times'} />
              </div>
            </div>
            <ul className={cx('flex')}>
              {this.pages.map((page, i) => {
                return (
                  <li key={i} className={cx('menu-item')}
                    onClick={() => this.props.toggleMenu()}>
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
}