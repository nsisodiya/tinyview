/**
 * Created by narendrasisodiya on 07/12/15.
 */

import CounterComponent from './counter';
import ResetComponent from './reset';

class BodyComponent extends window.tinyview {
	constructor(ele, options) {
		super(...arguments);
		this.render();
		this.loadSubComponents();
	}

	render() {
		this.$.innerHTML = '<div><h1>Counter Example</h1>\
				<div id="c1"></div>\
				<div id="c2"></div>\
      </div>';
	}

	loadSubComponents() {
		this.startSubComponent(CounterComponent, this.$.querySelector('#c1'), {});
		this.startSubComponent(ResetComponent, this.$.querySelector('#c2'), {});
	}
}

export default BodyComponent;