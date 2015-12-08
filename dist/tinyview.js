(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define([], factory);
	else if (typeof exports === 'object')
		exports["tinyview"] = factory();
	else
		root["tinyview"] = factory();
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

			var _tinyview = __webpack_require__(5);

			var _tinyview2 = _interopRequireDefault(_tinyview);

			__webpack_require__(6);

			__webpack_require__(7);

			__webpack_require__(8);

			__webpack_require__(9);

			__webpack_require__(10);

			__webpack_require__(12);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			//export default TinyView

			//Add API
			module.exports = _tinyview2.default;

			//Load Plugins

			/***/
		},
		/* 1 */,
		/* 2 */,
		/* 3 */,
		/* 4 */,
		/* 5 */
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

			var TinyView = (function () {
				function TinyView(ele, options) {
					_classCallCheck(this, TinyView);

					this.$ = ele;
					this.options = options;

					var self = this;
					TinyView.afterStartFunctions.map(function (v, i, arr) {
						v.call(self);
					});
				}

				_createClass(TinyView, [{
					key: "end",
					value: function end() {
						var self = this;
						TinyView.beforeEndFunctions.map(function (v, i, arr) {
							v.call(self);
						});
						if (typeof this.beforeEnd === "function") {
							this.beforeEnd();
						}
						this.$.parentNode.removeChild(this.$);
					}
				}]);

				return TinyView;
			})();

			exports.default = TinyView;

			/***/
		},
		/* 6 */
		/***/ function (module, exports, __webpack_require__) {

			'use strict';

			var _tinyview = __webpack_require__(5);

			var _tinyview2 = _interopRequireDefault(_tinyview);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			//============= Hooks API ==============//

			_tinyview2.default.afterStartFunctions = [];
			_tinyview2.default.beforeEndFunctions = [];

			_tinyview2.default.registerHooks = function (config) {
				if (config.afterStart !== undefined) {
					_tinyview2.default.afterStartFunctions.push(config.afterStart);
				}
				if (config.beforeEnd !== undefined) {
					_tinyview2.default.beforeEndFunctions.push(config.beforeEnd);
				}
			};

			//============ Extending Via Methods ===========//

			_tinyview2.default.registerMethods = function (config) {
				Object.keys(config).map(function (v) {
					_tinyview2.default.prototype[v] = config[v];
				});
			};

			//================== Extending TinyView using Plugin API ========//
			_tinyview2.default.registerPlugin = function (name, fn) {
				fn();
			};

			/***/
		},
		/* 7 */
		/***/ function (module, exports, __webpack_require__) {

			"use strict";

			var _tinyview = __webpack_require__(5);

			var _tinyview2 = _interopRequireDefault(_tinyview);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			_tinyview2.default.registerPlugin("tinyview-plugin-subComponentManager", function () {
				_tinyview2.default.registerHooks({
					afterStart: function afterStart() {
						this._subComponents = [];
					},
					beforeEnd: function beforeEnd() {
						this._subComponents.map(function (v, i, arr) {
							v.end();
						});
						this._subComponents = null;
					}
				});

				_tinyview2.default.registerMethods({
					startSubComponent: function startSubComponent(Component, node, options) {
						var c = new Component(node, options);
						this._subComponents.push(c);
						return c;
					}
				});
			});
			/**
			 * Created by narendrasisodiya on 07/12/15.
			 */

			/***/
		},
		/* 8 */
		/***/ function (module, exports, __webpack_require__) {

			"use strict";

			var _tinyview = __webpack_require__(5);

			var _tinyview2 = _interopRequireDefault(_tinyview);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			_tinyview2.default.registerPlugin("tinyview-plugin-behaviour", function () {
				_tinyview2.default.registerHooks({
					afterStart: function afterStart() {
						var self = this;
						if (this.behaviours !== undefined && this.behaviours.length !== undefined) {
							this.behaviours.map(function (v) {
								v.afterStart.call(self);
							});
						}
					},
					beforeEnd: function beforeEnd() {
						var self = this;
						if (this.behaviours !== undefined && this.behaviours.length !== undefined) {
							this.behaviours.map(function (v) {
								v.beforeEnd.call(self);
							});
						}
					}
				});
			});
			/**
			 * Created by narendrasisodiya on 07/12/15.
			 */

			/***/
		},
		/* 9 */
		/***/ function (module, exports, __webpack_require__) {

			"use strict";

			var _tinyview = __webpack_require__(5);

			var _tinyview2 = _interopRequireDefault(_tinyview);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			function _typeof(obj) {
				return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
			} //=============  Plugins  - DOM Events  ==========//

			_tinyview2.default.registerPlugin("tinyview-plugin-domEvents", function () {
				//  addLiveEventListener can be exposed as npm package !
				var addLiveEventListener = (function () {
					"use strict";

					var ElementProto = Element.prototype;
					ElementProto.matchesSelector =
							ElementProto.matches || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector ||
							ElementProto.msMatchesSelector;

					if (!ElementProto.matches) {
						ElementProto.matches = ElementProto.matchesSelector;
					}
					return function (ele, eventName, hash, eventCallback, context) {
						var callback = function callback(e) {
							var currNode = e.target;
							if (hash === "") {
								eventCallback.call(context, e, e.currentTarget, e.currentTarget.dataset);
							} else {
								while (currNode !== e.currentTarget && currNode !== document && currNode !== null) {
									if (currNode.matches(hash) === true) {
										eventCallback.call(context, e, currNode, currNode.dataset);
										break;
									}
									currNode = currNode.parentNode;
								}
							}
						};
						ele.addEventListener(eventName, callback, false);
						return callback;
					};
				})();

				_tinyview2.default.registerHooks({
					afterStart: function afterStart() {
						if (this.domEvents === undefined) {
							return;
						}
						//We use {"eventName hash":"handler"} kind of notation !
						var self = this;
						this._domEventsMap = {};
						Object.keys(this.domEvents).map(function (key) {
							var methodName = self.domEvents[key];
							key = key.trim().replace(/ +/g, " ");
							var arr = key.split(" ");
							var eventName = arr.shift();
							var hash = arr.join(" ");
							var callback = addLiveEventListener(self.$, eventName, hash, self[methodName], self);
							self._domEventsMap[key] = {
								eventName: eventName,
								callback: callback
							};
						});
					},
					beforeEnd: function beforeEnd() {
						if (this.domEvents === undefined) {
							return;
						}
						var self = this;
						Object.keys(this._domEventsMap).map(function (key) {
							var v = self._domEventsMap[key];
							if (v !== undefined && (typeof v === "undefined" ? "undefined" : _typeof(v)) === "object") {
								self.$.removeEventListener(v.eventName, v.callback);
								delete self._domEventsMap[key];
							}
						});
					}
				});
			});

			/***/
		},
		/* 10 */
		/***/ function (module, exports, __webpack_require__) {

			'use strict';

			var _tinyview = __webpack_require__(5);

			var _tinyview2 = _interopRequireDefault(_tinyview);

			var _eventbus = __webpack_require__(11);

			var _eventbus2 = _interopRequireDefault(_eventbus);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			/**
			 * Created by narendrasisodiya on 07/12/15.
			 */

			var globalEventbus = new _eventbus2.default();

			_tinyview2.default.registerPlugin("tinyview-plugin-eventBus", function () {

				_tinyview2.default.registerHooks({
					afterStart: function afterStart() {
						this._globalEventsMap = {};

						if (this.globalEvents === undefined) {
							return;
						}
						var self = this;
						Object.keys(this.globalEvents).map(function (eventName) {
							self._subscribeGlobalEvent(eventName, self.globalEvents[eventName]);
						});
					},
					beforeEnd: function beforeEnd() {
						var self = this;
						Object.keys(this._globalEventsMap).map(function (topic) {
							self._unsubscribeGlobalEvent(topic);
						});
					}
				});

				_tinyview2.default.registerMethods({
					_subscribeGlobalEvent: function _subscribeGlobalEvent(topic, methodName) {
						var self = this;
						var callback = function callback() {
							self[methodName].apply(self, arguments);
						};
						if (this._globalEventsMap[topic] === undefined) {
							this._globalEventsMap[topic] = [];
						}
						this._globalEventsMap[topic].push(globalEventbus.subscribe(topic, callback));
					},
					_unsubscribeGlobalEvent: function _unsubscribeGlobalEvent(topic) {
						if (this._globalEventsMap[topic] !== undefined) {
							this._globalEventsMap[topic].map(function (v, i) {
								globalEventbus.unsubscribe(v);
							});
							delete this._globalEventsMap[topic];
						}
					},
					publishGlobalEvent: function publishGlobalEvent() {
						globalEventbus.publish.apply(globalEventbus, arguments);
					}
				});
			});

			/***/
		},
		/* 11 */
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

			function _typeof(obj) {
				return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var EventBus = (function () {
				function EventBus() {
					_classCallCheck(this, EventBus);

					this._NewsPaperList = {};
					this._OrderList = [];
				}

				_createClass(EventBus, [{
					key: "subscribe",
					value: function subscribe(newsPaper, address) {
						if (typeof newsPaper !== "string" || typeof address !== "function") {
							return -1;
						}
						var AList = this._NewsPaperList[newsPaper];
						if ((typeof AList === "undefined" ? "undefined" : _typeof(AList)) !== "object") {
							AList = this._NewsPaperList[newsPaper] = [];
						}

						var customer = AList.push(address) - 1;

						return this._OrderList.push({
									newsPaper: newsPaper,
									customer: customer
								}) - 1;
					}
				}, {
					key: "unsubscribe",
					value: function unsubscribe(orderId) {
						var O = this._OrderList[orderId];
						if (O !== undefined) {
							delete this._NewsPaperList[O.newsPaper][O.customer];
						}
					}
				}, {
					key: "publish",
					value: function publish(topic) {
						var Arr = Array.prototype.slice.call(arguments);
						var newsPaper = Arr.slice(0, 1)[0];
						Arr.shift();
						var AddressList = this._NewsPaperList[newsPaper];
						if (typeof AddressList !== "undefined") {
							var l = AddressList.length;
							for (var i = 0; i < l; i++) {
								if (typeof AddressList[i] === "function") {
									AddressList[i].apply(this, Arr);
								}
							}
						}
					}
				}]);

				return EventBus;
			})();

			exports.default = EventBus;

			/***/
		},
		/* 12 */
		/***/ function (module, exports, __webpack_require__) {

			"use strict";

			var _tinyview = __webpack_require__(5);

			var _tinyview2 = _interopRequireDefault(_tinyview);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			_tinyview2.default.registerPlugin("tinyview-plugin-interval", function () {

				_tinyview2.default.registerMethods({
					setInterval: function setInterval() {
						var x = window.setInterval.apply(window, arguments);
						this._setIntervalMap.push(x);
						return x;
					}
				});

				_tinyview2.default.registerHooks({
					afterStart: function afterStart() {
						this._setIntervalMap = [];
					},
					beforeEnd: function beforeEnd() {
						this._setIntervalMap.map(function (v, i) {
							window.clearInterval(v);
						});
					}
				});
			});
			/**
			 * Created by narendrasisodiya on 07/12/15.
			 */

			/***/
		}
		/******/])
});
;