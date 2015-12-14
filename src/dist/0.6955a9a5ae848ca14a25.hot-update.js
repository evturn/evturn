webpackHotUpdate(0,{

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	exports.ProjectCarousel = undefined;
	
	var _react = __webpack_require__(172);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(338);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProjectCarousel = exports.ProjectCarousel = _react2.default.createClass({
	  displayName: 'ProjectCarousel',
	  init: function init(slug) {
	    var _this = this;
	
	    this.ID = slug;
	    this.spinLogo();
	    this.parent = this.refs[this.ID];
	    this.total = (0, _jquery2.default)(this.parent.children).length;
	    this.counter = null;
	    clearInterval(this.timer);
	    this.cycle();
	    this.timer = setInterval(function () {
	      _this.cycle();
	    }, 4000);
	  },
	  spinLogo: function spinLogo() {
	    var $webpage = (0, _jquery2.default)('html, body');
	    var $siteImage = (0, _jquery2.default)('.site-logo__image');
	
	    $webpage.animate({ scrollTop: 0 }, 200);
	    $siteImage.addClass('spin');
	    setTimeout(function () {
	      return $siteImage.removeClass('spin');
	    }, 740);
	  },
	  reset: function reset() {
	    clearInterval(this.timer);
	    this.removeClasses();
	  },
	  removeClasses: function removeClasses() {
	    var slides = (0, _jquery2.default)(this.parent.children);
	    (0, _jquery2.default)(slides).removeClass('active');
	    (0, _jquery2.default)(slides).removeClass('next');
	  },
	  cycle: function cycle() {
	    var isActiveLast = !!(this.counter === this.total);
	    var isNextLast = !!(this.next === this.total);
	    var isInitializing = !!(this.counter === null);
	
	    if (isInitializing) {
	      this.counter = 1;
	      this.next = 2;
	      return this.nextImage();
	    } else if (isActiveLast) {
	      this.counter = 1;
	      this.next = 2;
	    } else if (isNextLast) {
	      this.counter += 1;
	      this.next = 1;
	    } else {
	      this.counter += 1;
	      this.next = this.counter + 1;
	    }
	    return this.dissolve();
	  },
	  nextImage: function nextImage() {
	    var active = (0, _jquery2.default)(this.parent.children)[this.counter - 1];
	    var next = (0, _jquery2.default)(this.parent.children)[this.next - 1];
	
	    this.removeClasses();
	    (0, _jquery2.default)(active).addClass('active');
	    (0, _jquery2.default)(next).addClass('next');
	  },
	  dissolve: function dissolve() {
	    var _this2 = this;
	
	    var active = (0, _jquery2.default)(this.parent.children)[this.counter - 1];
	    var next = (0, _jquery2.default)(this.parent.children)[this.next - 1];
	
	    (0, _jquery2.default)(active).fadeTo(1000, 0);
	    (0, _jquery2.default)(next).fadeTo(1000, 1, function () {
	      return _this2.nextImage();
	    });
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    return this.reset();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      images: nextProps.images,
	      total: nextProps.images.length,
	      slug: nextProps.slug
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.init(this.state.slug);
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({
	      images: this.props.images,
	      total: this.props.images.length,
	      slug: this.props.slug
	    });
	    this.init(this.props.slug);
	  },
	  render: function render() {
	    var _this3 = this;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'carousel', ref: '' + this.props.slug },
	      this.props.images.map(function (result, i) {
	        return _react2.default.createElement(
	          'div',
	          { key: _this3.props.slug + '-' + (i + 1), className: 'carousel__item-image' },
	          _react2.default.createElement('img', { className: 'img-scale', src: result })
	        );
	      }),
	      _react2.default.createElement('div', { className: 'carousel__curtain' })
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "project-carousel.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.6955a9a5ae848ca14a25.hot-update.js.map