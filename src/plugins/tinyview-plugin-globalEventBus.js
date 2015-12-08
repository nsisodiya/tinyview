/**
 * Created by narendrasisodiya on 07/12/15.
 */

import TinyView from '../tinyview.js';
import EventBus from '../eventbus.js';

var globalEventbus = new EventBus();

TinyView.registerPlugin("tinyview-plugin-eventBus", function () {

	TinyView.registerHooks({
		afterStart: function () {
			this._globalEventsMap = {};

			if (this.globalEvents === undefined) {
				return;
			}
			var self = this;
			Object.keys(this.globalEvents).map(function (eventName) {
				self._subscribeGlobalEvent(eventName, self.globalEvents[eventName]);
			});

		},
		beforeEnd: function () {
			var self = this;
			Object.keys(this._globalEventsMap).map(function (topic) {
				self._unsubscribeGlobalEvent(topic);
			});
		}
	});

	TinyView.registerMethods({
		_subscribeGlobalEvent: function (topic, methodName) {
			var self = this;
			var callback = function () {
				self[methodName].apply(self, arguments);
			};
			if (this._globalEventsMap[topic] === undefined) {
				this._globalEventsMap[topic] = [];
			}
			this._globalEventsMap[topic].push(globalEventbus.subscribe(topic, callback));
		},
		_unsubscribeGlobalEvent: function (topic) {
			if (this._globalEventsMap[topic] !== undefined) {
				this._globalEventsMap[topic].map(function (v, i) {
					globalEventbus.unsubscribe(v);
				});
				delete this._globalEventsMap[topic];
			}
		},
		publishGlobalEvent: function () {
			globalEventbus.publish.apply(globalEventbus, arguments);
		}
	});
});