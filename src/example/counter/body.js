/**
 * Created by narendrasisodiya on 07/12/15.
 */
class BodyComponent extends TinyView {
	constructor(ele, options) {
		super(...arguments);
		this.loadSubComponents();
	}

	get template() {
		return '<div><h1>Counter Example</h1>\
				<div id="c1"></div>\
				<div id="c2"></div>\
      </div>';
	}

	loadSubComponents() {
		this.startSubComponent(CounterComponent, this.$.querySelector('#c1'), {});
		this.startSubComponent(ResetComponent, this.$.querySelector('#c2'), {});
	}
}
