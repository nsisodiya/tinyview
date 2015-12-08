class TinyView {
	constructor(ele, options) {
		this.$ = ele;
		this.options = options;

		var self = this;
		TinyView.afterStartFunctions.map(function (v, i, arr) {
			v.call(self);
		});
	}

	end() {
		var self = this;
		TinyView.beforeEndFunctions.map(function (v, i, arr) {
			v.call(self);
		});
		if (typeof this.beforeEnd === "function") {
			this.beforeEnd();
		}
		this.$.parentNode.removeChild(this.$);
	}
}

export default TinyView;