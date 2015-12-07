/**
 * Created by narendrasisodiya on 07/12/15.
 */

class ResetComponent extends TinyView {
	constructor(ele, options) {
		super(...arguments);
	}

	get domEvents() {
		return {
			"click #reset": "resetCounter"
		}
	}

	resetCounter() {
		this.publishGlobalEvent("RESET_COUNTER");
	}

	get template() {
		return '<div><h1>Reset Component</h1>\
				<button id="reset">Reset</button>\
      </div>';
	}
}
