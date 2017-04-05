// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.
// Use `.scripts/user/pretest.js instead`.

require('babel-core/register');
require('babel-polyfill');

// Adds window.matchMedia support 
var matchMedia = require('matchmedia');

// Add jsdom support, which is required for enzyme.
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.window.matchMedia = matchMedia;

process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});
