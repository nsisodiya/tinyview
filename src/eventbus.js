class EventBus {
	constructor() {
		this._NewsPaperList = {};
		this._OrderList = [];
	}

	subscribe(newsPaper, address) {
		if ((typeof newsPaper !== "string") || (typeof address !== "function")) {
			return -1;
		}
		var AList = this._NewsPaperList[newsPaper];
		if (typeof AList !== "object") {
			AList = this._NewsPaperList[newsPaper] = [];
		}

		var customer = AList.push(address) - 1;

		return this._OrderList.push({
					newsPaper: newsPaper,
					customer: customer
				}) - 1;
	}

	unsubscribe(orderId) {
		var O = this._OrderList[orderId];
		if (O !== undefined) {
			delete this._NewsPaperList[O.newsPaper][O.customer];
		}
	}

	publish(topic) {
		var Arr = Array.prototype.slice.call(arguments);
		var newsPaper = Arr.slice(0, 1)[0];
		Arr.shift();
		var AddressList = this._NewsPaperList[newsPaper];
		if (typeof AddressList !== "undefined") {
			var l = AddressList.length;
			for (var i = 0; i < l; i++) {
				if (typeof AddressList[i] === "function") {
					AddressList[i].apply(this, Arr);
				}
			}
		}
	}
}

export default EventBus;
