import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../client/assets/less/components/footer.less';
import { Icon } from './reuseables';

const cx = classNames.bind(styles);

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.text = '© 2016 evturn.com built with ';
    this.state = {
      page: props.page,
      blend: props.page === 'contact'
    };
  }
  componentWillReceiveProps(nextProps) {
    return this.setState({
      page: nextProps.page,
      blend: nextProps.page === 'contact'
    });
  }
  render() {
    return (
      <footer className={cx(this.state.page)}>
        <div className={cx({ 'blend': this.state.blend })} />
        <div className={cx('footer-text')}>
          <span className={cx('copyright')}>{this.text}</span>
          <Icon classname={'devicon-react-plain-wordmark'} />
        </div>
      </footer>
    );
  }
}