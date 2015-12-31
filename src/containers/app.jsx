import {default as Footer} from 'components/footer';
import {default as Header} from 'components/header';
// import 'sources/google-analytics';
import 'styles/style.less';

export default React.createClass({
  getInitialState() {
    return {
      page: this.props.routes[1].name
    };
  },
  componentWillReceiveProps(newProps) {
    const newPage = newProps.routes[1].name;
    if (this.state.page !== newPage) {
      return this.setState({
        page: newPage
      });
    }
  },
  componentDidMount() {
    return this.setState({
      page: this.props.routes[1].name
    });
  },
  render() {
    const {page} = this.state;

    return (
      <div>
        <Header page={page} />
        {this.props.children}
        <Footer page={page} />
      </div>
    );
  }
});