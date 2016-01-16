import React from 'react';
import FontIcon from 'components/FontIcon';
import classNames from 'classnames/bind';
import styles from 'styles/components/footer.less';

const cx = classNames.bind(styles);

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.text = '© 2015 evturn.com built with ';
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
          <FontIcon name={'devicon-react-plain-wordmark'} />
        </div>
      </footer>
    );
  }
}