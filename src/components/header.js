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
  onChildChanged(openState) {
    return this.setState(openState);
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
          initialOpen={this.state.open}
          open={open}
          callbackParent={this.onChildChanged}
        />
        <Menu
          open={this.state.open}
          callbackParent={this.onChildChanged}
          page={this.state.page}
        />
      </div>
    );
  }
});