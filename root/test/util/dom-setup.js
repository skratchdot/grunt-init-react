/*
 * https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md
 */
import injectTapEventPlugin from 'react-tap-event-plugin';
import { jsdom } from 'jsdom';
const exposedProperties = ['window', 'navigator', 'document'];

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

injectTapEventPlugin();
