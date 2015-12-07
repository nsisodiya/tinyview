//=============  Plugins  - DOM Events  ==========//
TinyView.registerPlugin("tinyview-plugin-domEvents", function () {
	//  addLiveEventListener can be exposed as npm package !
	var addLiveEventListener = (function () {
		"use strict";

		var ElementProto = Element.prototype;
		ElementProto.matchesSelector =
				ElementProto.matches ||
				ElementProto.webkitMatchesSelector ||
				ElementProto.mozMatchesSelector ||
				ElementProto.msMatchesSelector;

		if (!ElementProto.matches) {
			ElementProto.matches = ElementProto.matchesSelector;
		}
		return function (ele, eventName, hash, eventCallback, context) {
			var callback = function (e) {
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
		}
	})();

	TinyView.registerHooks({
		afterStart: function () {
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
		beforeEnd: function () {
			if (this.domEvents === undefined) {
				return;
			}
			var self = this;
			Object.keys(this._domEventsMap).map(function (key) {
				var v = self._domEventsMap[key];
				if (v !== undefined && typeof v === "object") {
					self.$.removeEventListener(v.eventName, v.callback);
					delete self._domEventsMap[key];
				}
			});
		}
	});
});
