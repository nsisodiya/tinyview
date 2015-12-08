/**
 * Created by narendrasisodiya on 07/12/15.
 */

import TinyView from '../tinyview.js';

TinyView.registerPlugin("tinyview-plugin-interval", function () {

	TinyView.registerMethods({
		setInterval: function () {
			var x = window.setInterval.apply(window, arguments);
			this._setIntervalMap.push(x);
			return x;
		}
	});

	TinyView.registerHooks({
		afterStart: function () {
			this._setIntervalMap = [];

		},
		beforeEnd: function () {
			this._setIntervalMap.map(function (v, i) {
				window.clearInterval(v);
			});
		}
	});
});
