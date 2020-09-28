exports.transports = {
  websocket: require('./src/lib/websocket'),
  iframe: require('./src/lib/iframe'),
  opener: require('./src/lib/opener'),
  webrtc: require('./src/lib/webrtc'),
  base: require('./src/lib/base'),
};
exports.connection = require('./src/helpers/connection');

exports.getTransport = function getTransport(transport) {
  return exports.transports[transport];
};
