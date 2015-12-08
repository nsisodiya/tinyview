(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define([], factory);
	else if (typeof exports === 'object')
		exports["example"] = factory();
	else
		root["example"] = factory();
})(this, function () {
	return /******/ (function (modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/
		var installedModules = {};

		/******/ 	// The require function
		/******/
		function __webpack_require__(moduleId) {

			/******/ 		// Check if module is in cache
			/******/
			if (installedModules[moduleId])
			/******/      return installedModules[moduleId].exports;

			/******/ 		// Create a new module (and put it into the cache)
			/******/
			var module = installedModules[moduleId] = {
				/******/      exports: {},
				/******/      id: moduleId,
				/******/      loaded: false
				/******/
			};

			/******/ 		// Execute the module function
			/******/
			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ 		// Flag the module as loaded
			/******/
			module.loaded = true;

			/******/ 		// Return the exports of the module
			/******/
			return module.exports;
			/******/
		}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/
		__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/
		__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/
		__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/
		return __webpack_require__(0);
		/******/
	})
	/************************************************************************/
	/******/([
		/* 0 */
		/***/ function (module, exports, __webpack_require__) {

			'use strict';

			var _body = __webpack_require__(1);

			var _body2 = _interopRequireDefault(_body);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			var app = new _body2.default(document.getElementById('root'), {});
			/**
			 * Created by narendrasisodiya on 07/12/15.
			 */

			window.setTimeout(function () {
				app.end();
			}, 10000);

			/***/
		},
		/* 1 */
		/***/ function (module, exports, __webpack_require__) {

			'use strict';

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			})();

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _counter = __webpack_require__(2);

			var _counter2 = _interopRequireDefault(_counter);

			var _reset = __webpack_require__(4);

			var _reset2 = _interopRequireDefault(_reset);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}
				return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}
				subClass.prototype = Object.create(superClass && superClass.prototype,
						{constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
				if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) :
						subClass.__proto__ = superClass;
			}

			/**
			 * Created by narendrasisodiya on 07/12/15.
			 */

			var BodyComponent = (function (_window$tinyview) {
				_inherits(BodyComponent, _window$tinyview);

				function BodyComponent(ele, options) {
					_classCallCheck(this, BodyComponent);

					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BodyComponent).apply(this, arguments));

					_this.render();
					_this.loadSubComponents();
					return _this;
				}

				_createClass(BodyComponent, [{
					key: 'render',
					value: function render() {
						this.$.innerHTML = '<div><h1>Counter Example</h1>\
					<div id="c1"></div>\
					<div id="c2"></div>\
	      </div>';
					}
				}, {
					key: 'loadSubComponents',
					value: function loadSubComponents() {
						this.startSubComponent(_counter2.default, this.$.querySelector('#c1'), {});
						this.startSubComponent(_reset2.default, this.$.querySelector('#c2'), {});
					}
				}]);

				return BodyComponent;
			})(window.tinyview);

			exports.default = BodyComponent;

			/***/
		},
		/* 2 */
		/***/ function (module, exports, __webpack_require__) {

			"use strict";

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			})();

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _addBorder = __webpack_require__(3);

			var _addBorder2 = _interopRequireDefault(_addBorder);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}
				return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}
				subClass.prototype = Object.create(superClass && superClass.prototype,
						{constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
				if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) :
						subClass.__proto__ = superClass;
			}

			/**
			 * Created by narendrasisodiya on 07/12/15.
			 */

			var CounterComponent = (function (_window$tinyview) {
				_inherits(CounterComponent, _window$tinyview);

				function CounterComponent(ele, options) {
					_classCallCheck(this, CounterComponent);

					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CounterComponent).apply(this, arguments));

					_this.count = 0;
					_this.render();
					_this.counterEle = _this.$.querySelector("#val");
					_this.startInterval();
					return _this;
				}

				_createClass(CounterComponent, [{
					key: "render",
					value: function render() {
						this.$.innerHTML = '<div>Counter = <span id="val">0</span>\
			<button id="stop">Stop</button>\
			<button id="start">Start</button>\
	      </div>';
					}
				}, {
					key: "startInterval",
					value: function startInterval() {
						this.stopInterval();
						this.intervalSubId = this.setInterval((function () {
							this.incrementCount();
						}).bind(this), 500);
					}
				}, {
					key: "incrementCount",
					value: function incrementCount() {
						console.log("Incrementing");
						this.count = this.count + 1;
						this.counterEle.innerHTML = this.count;
					}
				}, {
					key: "resetCounter",
					value: function resetCounter() {
						console.log("Reset");
						this.count = 0;
						this.counterEle.innerHTML = this.count;
					}
				}, {
					key: "stopInterval",
					value: function stopInterval() {
						window.clearInterval(this.intervalSubId);
					}
				}, {
					key: "behaviours",
					get: function get() {
						return [_addBorder2.default];
					}
				}, {
					key: "globalEvents",
					get: function get() {
						return {
							"RESET_COUNTER": "resetCounter"
						};
					}
				}, {
					key: "domEvents",
					get: function get() {
						return {
							"click #start": "startInterval",
							"click #stop": "stopInterval"
						};
					}
				}]);

				return CounterComponent;
			})(window.tinyview);

			exports.default = CounterComponent;

			/***/
		},
		/* 3 */
		/***/ function (module, exports) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = {
				afterStart: function afterStart() {
					this.$.style.border = "5px solid black";
					this.$.style.padding = "10px";
				},
				beforeEnd: function beforeEnd() {
				}
			};

			/***/
		},
		/* 4 */
		/***/ function (module, exports) {

			"use strict";

			var _createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			})();

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}
				return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}
				subClass.prototype = Object.create(superClass && superClass.prototype,
						{constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
				if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) :
						subClass.__proto__ = superClass;
			}

			/**
			 * Created by narendrasisodiya on 07/12/15.
			 */

			var ResetComponent = (function (_window$tinyview) {
				_inherits(ResetComponent, _window$tinyview);

				function ResetComponent(ele, options) {
					_classCallCheck(this, ResetComponent);

					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResetComponent).apply(this, arguments));

					_this.render();
					return _this;
				}

				_createClass(ResetComponent, [{
					key: "resetCounter",
					value: function resetCounter() {
						this.publishGlobalEvent("RESET_COUNTER");
					}
				}, {
					key: "render",
					value: function render() {
						this.$.innerHTML = '<div><h1>Reset Component</h1>\
					<button id="reset">Reset</button>\
	      </div>';
					}
				}, {
					key: "domEvents",
					get: function get() {
						return {
							"click #reset": "resetCounter"
						};
					}
				}]);

				return ResetComponent;
			})(window.tinyview);

			exports.default = ResetComponent;

			/***/
		}
		/******/])
});
;