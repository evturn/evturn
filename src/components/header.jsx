import {default as Menu} from 'components/menu';
import {default as Overlay} from 'components/overlay';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return {
      page: this.props.page,
      open: false
    };
  },
  onChildChanged(newOpenState) {
    return this.setState(newOpenState);
  },
  componentWillReceiveProps(nextProps) {
    return this.setState({
      page: nextProps.page
    });
  },
  render() {
    const {open, page} = this.state;

    return (
      <div>
        <Overlay
          initialOpen={open}
          open={open}
          callbackParent={this.onChildChanged}
        />
        <Menu
          initialOpen={open}
          open={open}
          callbackParent={this.onChildChanged}
          page={page}
        />
      </div>
    );
  }
});