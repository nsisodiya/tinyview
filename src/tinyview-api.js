import TinyView from './tinyview';

//============= Hooks API ==============//

TinyView.afterStartFunctions = [];
TinyView.beforeEndFunctions = [];

TinyView.registerHooks = function (config) {
	if (config.afterStart !== undefined) {
		TinyView.afterStartFunctions.push(config.afterStart);
	}
	if (config.beforeEnd !== undefined) {
		TinyView.beforeEndFunctions.push(config.beforeEnd);
	}
};


//============ Extending Via Methods ===========//

TinyView.registerMethods = function (config) {
	Object.keys(config).map(function (v) {
		TinyView.prototype[v] = config[v];
	});
};

//================== Extending TinyView using Plugin API ========//
TinyView.registerPlugin = function (name, fn) {
	fn();
};
