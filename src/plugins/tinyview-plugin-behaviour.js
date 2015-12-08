/**
 * Created by narendrasisodiya on 07/12/15.
 */

import TinyView from '../tinyview.js';

TinyView.registerPlugin("tinyview-plugin-behaviour", function () {
	TinyView.registerHooks({
		afterStart: function () {
			var self = this;
			if (this.behaviours !== undefined && this.behaviours.length !== undefined) {
				this.behaviours.map(function (v) {
					v.afterStart.call(self);
				});
			}
		},
		beforeEnd: function () {
			var self = this;
			if (this.behaviours !== undefined && this.behaviours.length !== undefined) {
				this.behaviours.map(function (v) {
					v.beforeEnd.call(self);
				});
			}
		}
	});
});