/**
 * Created by narendrasisodiya on 07/12/15.
 */

class ResetComponent extends window.tinyview {
	constructor(ele, options) {
		super(...arguments);
		this.render();
	}

	get domEvents() {
		return {
			"click #reset": "resetCounter"
		}
	}

	resetCounter() {
		this.publishGlobalEvent("RESET_COUNTER");
	}

	render() {
		this.$.innerHTML = '<div><h1>Reset Component</h1>\
				<button id="reset">Reset</button>\
      </div>';
	}
}

export default ResetComponent;