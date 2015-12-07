/**
 * Created by narendrasisodiya on 07/12/15.
 */

class _EventBus {
	constructor() {
		this._NewsPaperList = {};
		this._OrderList = [];
	}

	subscribe(newsPaper, address) {
		if ((typeof newsPaper !== "string") || (typeof address !== "function")) {
			return -1;
		}
		var AList = this._NewsPaperList[newsPaper];
		if (typeof AList !== "object") {
			AList = this._NewsPaperList[newsPaper] = [];
		}

		var customer = AList.push(address) - 1;

		return this._OrderList.push({
					newsPaper: newsPaper,
					customer: customer
				}) - 1;
	}

	unsubscribe(orderId) {
		var O = this._OrderList[orderId];
		if (O !== undefined) {
			delete this._NewsPaperList[O.newsPaper][O.customer];
		}
	}

	publish(topic) {
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
}

TinyView.EventBus = _EventBus;
TinyView.registerPlugin("tinyview-plugin-eventBus", function () {
	var globalEventbus = new TinyView.EventBus();

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
		},
	});
});