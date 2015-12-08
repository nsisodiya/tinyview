/**
 * Created by narendrasisodiya on 07/12/15.
 */

import BodyComponent from './body';

var app = new BodyComponent(document.getElementById('root'), {});
window.setTimeout(function () {
	app.end();
}, 10000);