webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _dragon = __webpack_require__(2);

	var _dragon2 = _interopRequireDefault(_dragon);

	var _routes = __webpack_require__(68);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = new _dragon2.default.Application({
	  dispatcher: {
	    getController: function getController(name) {
	      return __webpack_require__(69)("./" + name).default;
	    }
	  },
	  router: {
	    routes: _routes2.default
	  }
	});

	app.start();

/***/ },

/***/ 68:
/***/ function(module, exports) {

	'use strict';

	module.exports = function (router) {

	  router.get('/auth/create');
	};

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./auth": 70,
		"./auth.js": 70
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 69;


/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dragon = __webpack_require__(2);

	var _dragon2 = _interopRequireDefault(_dragon);

	var _view = __webpack_require__(71);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthController = function (_Dragon$Controller) {
	  _inherits(AuthController, _Dragon$Controller);

	  function AuthController() {
	    _classCallCheck(this, AuthController);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AuthController).apply(this, arguments));
	  }

	  _createClass(AuthController, [{
	    key: 'create',
	    value: function create(req, res, next) {
	      this.model = new _dragon2.default.Model({
	        partials: { spinner: '' }
	      });

	      this.view = new _view2.default({
	        model: this.model,
	        type: 'create'
	      });
	    }
	  }]);

	  return AuthController;
	}(_dragon2.default.Controller);

	exports.default = AuthController;

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dragon = __webpack_require__(2);

	var _dragon2 = _interopRequireDefault(_dragon);

	var _form = __webpack_require__(72);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthView = function (_FormView) {
	  _inherits(AuthView, _FormView);

	  function AuthView() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, AuthView);

	    switch (options.type) {

	      case 'create':
	        options.template = __webpack_require__(75);

	        break;

	      default:
	        options.template = __webpack_require__(76);

	    }

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AuthView).call(this, Object.assign({}, {
	      container: '#app-container',
	      reducer: function AuthViewReducer() {
	        var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	        var action = arguments[1];

	        //console.log('state', state)
	        console.log('action', action);

	        switch (action.type) {

	          case 'ERROR':
	            console.log('state: error', state);
	            return Object.assign({}, state, {
	              error: 'foo'
	            });

	          case 'SUBMITTING':
	            console.log('state: submitting', state);
	            return Object.assign({}, state, {
	              spinning: 'abc'
	            });

	          default:
	            console.log('state: default', state);
	            console.log('what is idom', this.idom);
	            return state;
	        }
	      }
	    }, options)));
	  }

	  _createClass(AuthView, [{
	    key: 'formSubmit',
	    value: function formSubmit(e) {
	      e.preventDefault();

	      console.log("create form submitted", this.model);
	      this.state('submitting', { partials: {
	          spinner: __webpack_require__(77)
	        } });

	      var pkg = {
	        email: this.refs('email').value,
	        password: this.refs('password').value,
	        username: this.refs('username').value
	      };
	      return console.log('da pkg yo', pkg);
	      var validate = this.validate(pkg);
	      console.log("validate", validate);
	      if (!validate.error) {

	        this.state.set('submitting');

	        this.model.create(pkg).then(function (res) {

	          console.log("what dis res", res);
	        }, this.formError);
	      }
	    }
	  }, {
	    key: 'onAddedToDOM',
	    value: function onAddedToDOM() {
	      var _this2 = this;

	      console.log('added to dom in auth view');

	      this.model.on('change', function () {
	        console.log('change', _this2.model.attr);
	      });

	      this.refs('form', '.auth-form');
	      this.refs('email', '#auth-email');
	      this.refs('password', '#auth-password');
	      this.refs('username', '#auth-username');
	    }
	  }]);

	  return AuthView;
	}(_form2.default);

	exports.default = AuthView;

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(73);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormView = function (_BaseView) {
	  _inherits(FormView, _BaseView);

	  function FormView() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, FormView);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormView).call(this, options));

	    _this.event('click', '.form-view input', _this.inputClearError);
	    _this.event('click', '.form-view #form-submit', _this.formSubmit);

	    _this.event('enter', '.form-view', _this.formSubmit);
	    _this.event('keydown', '.form-view input', _this.inputClearError);
	    return _this;
	  }

	  _createClass(FormView, [{
	    key: 'formError',
	    value: function formError(err) {
	      console.error("Form error", err);
	    }
	  }, {
	    key: 'inputClearError',
	    value: function inputClearError(e) {

	      var parentEl = e.target.parentElement;

	      if (parentEl.classList.contains('has-error')) {

	        parentEl.classList.remove('has-error');
	      }
	    }
	  }, {
	    key: 'validate',
	    value: function validate() {
	      var _this2 = this;

	      var pkg = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      this.state.set('validating');

	      var onValidate = this.model.validate(pkg);

	      if (onValidate.error) {
	        console.log('DEBUG: validate error', onValidate.error);
	        this.state.set('error');

	        onValidate.error.details.forEach(function (error) {

	          _this2.refs(error.context.key).parentElement.classList.add('has-error');
	        });
	      }

	      return onValidate;
	    }
	  }]);

	  return FormView;
	}(_base2.default);

	module.exports = FormView;

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dragon = __webpack_require__(2);

	var _dragon2 = _interopRequireDefault(_dragon);

	var _refs = __webpack_require__(74);

	var _refs2 = _interopRequireDefault(_refs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseView = function (_Dragon$View) {
	  _inherits(BaseView, _Dragon$View);

	  function BaseView() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, BaseView);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseView).call(this, options));
	  }

	  return BaseView;
	}(_dragon2.default.View);

	BaseView.prototype.mixin(_refs2.default);

	exports.default = BaseView;

/***/ },

/***/ 74:
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RefsViewMixin = function () {
	  function RefsViewMixin() {
	    _classCallCheck(this, RefsViewMixin);
	  }

	  _createClass(RefsViewMixin, [{
	    key: "refs",
	    value: function refs() {

	      // TODO: Not sure this is the best way to define
	      this.$refs = this.$refs || {};

	      var ref = arguments[0],
	          selector = arguments[1];

	      switch (arguments.length) {

	        // GET
	        case 1:

	          return this.$refs[ref];

	          break;

	        // SET
	        case 2:

	          var $selector = this.$(selector);

	          if ($selector.length == 1) {
	            this.$refs[ref] = $selector[0];
	          } else {
	            this.$refs[ref] = $selector;
	          }
	          //this.$refs[ref] = $selector

	          break;

	        case 3:

	          break;

	        default:

	      }
	    }
	  }]);

	  return RefsViewMixin;
	}();

	exports.default = RefsViewMixin;

/***/ },

/***/ 75:
/***/ function(module, exports) {

	"use strict";

	module.exports = "\n<div class=\"row\">\n  <form class=\"block-form form-view login-form col-xs-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4\" data-state=\"\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control login-field\" value=\"\" placeholder=\"Email\" id=\"auth-email\" autofocus>\n      <label class=\"login-field-icon fui-email\" for=\"auth-email\"></label>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control login-field\" value=\"\" placeholder=\"Username\" id=\"auth-username\">\n      <label class=\"login-field-icon fui-user\" for=\"auth-username\"></label>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control login-field\" value=\"\" placeholder=\"Password\" id=\"auth-password\">\n      <label class=\"login-field-icon fui-lock\" for=\"auth-pass\"></label>\n    </div>\n\n    <button id=\"form-submit\" class=\"btn btn-primary btn-lg btn-block btn-submit\" href=\"#\">\n      <span class=\"btn-auth-text\">Create Account</span>\n      #{partials.spinner}\n\n    </button>\n\n    <a class=\"login-link\" href=\"/auth/login\">Sign In</a>\n\n  </form>\n</div>\n";

/***/ },

/***/ 76:
/***/ function(module, exports) {

	"use strict";

/***/ },

/***/ 77:
/***/ function(module, exports) {

	"use strict";

	module.exports = "<div class=\"sk-wave\">\n  <div class=\"sk-rect sk-rect1\"></div>\n  <div class=\"sk-rect sk-rect2\"></div>\n  <div class=\"sk-rect sk-rect3\"></div>\n  <div class=\"sk-rect sk-rect4\"></div>\n  <div class=\"sk-rect sk-rect5\"></div>\n</div>";

/***/ }

});