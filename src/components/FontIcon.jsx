import React from 'react';
import devicon from 'fonts/devicon.less';
import fontAwesome from 'fonts/font-awesome.less';
import classNames from 'classnames/bind';

const fa = classNames.bind(fontAwesome);
const dev = classNames.bind(devicon);

export default class FontIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const cx = !this.props.type ? dev : fa;

    return <span className={cx('fa', this.props.name)}></span>;
  }
}