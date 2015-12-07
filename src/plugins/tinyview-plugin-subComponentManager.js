/**
 * Created by narendrasisodiya on 07/12/15.
 */

TinyView.registerPlugin("tinyview-plugin-subComponentManager", function () {
	TinyView.registerHooks({
		afterStart: function () {
			this._subComponents = [];
		},
		beforeEnd: function () {
			this._subComponents.map(function (v, i, arr) {
				v.end();
			});
			this._subComponents = null;
		}
	});

	TinyView.registerMethods({
		startSubComponent: function (Component, node, options) {
			var c = new Component(node, options);
			this._subComponents.push(c);
			return c;
		}
	});
});