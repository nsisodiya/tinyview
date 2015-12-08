import TinyView from './tinyview';

//Add API
import './tinyview-api';

//Load Plugins

import './plugins/tinyview-plugin-subComponentManager';
import './plugins/tinyview-plugin-behaviour';
import './plugins/tinyview-plugin-domEvents';
import './plugins/tinyview-plugin-globalEventBus';
import './plugins/tinyview-plugin-interval';

//export default TinyView
module.exports = TinyView;