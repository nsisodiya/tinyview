/**
 * Created by narendrasisodiya on 07/12/15.
 */
class CounterComponent extends TinyView {
	constructor(ele, options) {
		super(...arguments);
		this.count = 0;
		this.counterEle = this.$.querySelector("#val");
		this.startInterval();
	}

	get behaviours() {
		return [addBorder]
	}

	get globalEvents() {
		return {
			"RESET_COUNTER": "resetCounter"
		}
	}

	get domEvents() {
		return {
			"click #start": "startInterval",
			"click #stop": "stopInterval"
		}
	}

	get template() {
		return '<div>Counter = <span id="val">0</span>\
		<button id="stop">Stop</button>\
		<button id="start">Start</button>\
      </div>';
	}

	startInterval() {
		this.stopInterval();
		this.intervalSubId = this.setInterval(function () {
			this.incrementCount();
		}.bind(this), 500);
	}

	incrementCount() {
		console.log("Incrementing");
		this.count = this.count + 1;
		this.counterEle.innerHTML = this.count;
	}

	resetCounter() {
		console.log("Reset");
		this.count = 0;
		this.counterEle.innerHTML = this.count;
	}

	stopInterval() {
		window.clearInterval(this.intervalSubId);
	}
}