webpackHotUpdate(0,{

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(110), RootInstanceProvider = __webpack_require__(118), ReactMount = __webpack_require__(120), React = __webpack_require__(172); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	exports.__esModule = true;
	exports.URL = undefined;
	exports.updateLayout = updateLayout;
	exports.setProject = setProject;
	exports.setFeaturedProjects = setFeaturedProjects;
	exports.setFeaturedTech = setFeaturedTech;
	
	var _projects = __webpack_require__(350);
	
	var _projects2 = _interopRequireDefault(_projects);
	
	var _tech = __webpack_require__(351);
	
	var _tech2 = _interopRequireDefault(_tech);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function findProjectById() {
	  var id = arguments.length <= 0 || arguments[0] === undefined ? 4 : arguments[0];
	
	  var found = false;
	  var project = null;
	
	  _projects2.default.map(function (p, i) {
	    if (p.id === id) {
	      project = p;
	      found = true;
	    } else if (_projects2.default.length - 1 === i && !found && project === null) {
	      project = _projects2.default[0];
	    }
	  });
	
	  return { project: project };
	}
	
	function findTechByIds(ids) {
	  var tech = [];
	
	  for (var _iterator = ids, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	    var _ref;
	
	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }
	
	    var id = _ref;
	
	    for (var _iterator2 = _tech2.default, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	      var _ref2;
	
	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }
	
	      var obj = _ref2;
	
	      if (id === obj.id) {
	        tech.push(obj);
	      }
	    }
	  }
	
	  return tech;
	}
	
	function getFeatured(dataSource) {
	  var featured = [];
	
	  for (var _iterator3 = dataSource, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	    var _ref3;
	
	    if (_isArray3) {
	      if (_i3 >= _iterator3.length) break;
	      _ref3 = _iterator3[_i3++];
	    } else {
	      _i3 = _iterator3.next();
	      if (_i3.done) break;
	      _ref3 = _i3.value;
	    }
	
	    var obj = _ref3;
	
	    obj.featured ? featured.push(obj) : '';
	  }
	  return featured;
	}
	
	var URL = exports.URL = {
	  hash: function hash() {
	    return window.location.hash;
	  },
	  location: function location() {
	    return window.location;
	  },
	  route: function route() {
	    return window.location.hash.substr(1);
	  },
	  page: function page() {
	    return window.location.hash.substring(1, window.location.hash.indexOf('/'));
	  },
	  child: function child() {
	    var fromSecondPath = window.location.hash.substr(window.location.hash.indexOf('/') + 1);
	    return fromSecondPath.substr(0, fromSecondPath.indexOf('/'));
	  },
	  params: function params() {
	    var hash = window.location.hash.substr(1);
	    return hash.substr(hash.lastIndexOf('/') + 1);
	  }
	};
	
	function updateLayout(location) {
	  var pathname = location.pathname;
	
	  var key = pathname.split('/')[1] || 'index';
	  var el = document.getElementById('site-container');
	
	  el.removeAttribute('class');
	  el.classList.add('page-' + key);
	}
	
	function setProject(id) {
	  var _findProjectById = findProjectById(parseInt(id));
	
	  var project = _findProjectById.project;
	
	  project.tech = findTechByIds(project.techIds);
	
	  return project;
	}
	
	function setFeaturedProjects() {
	  return getFeatured(_projects2.default);
	}
	
	function setFeaturedTech() {
	  return getFeatured(_tech2.default);
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(327); if (makeExportsHot(module, __webpack_require__(172))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }

})
//# sourceMappingURL=0.bc58fb03104e137d0d57.hot-update.js.map