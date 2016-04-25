// ==UserScript==
// @name         Scriptstaller Dev
// @namespace    scriptstaller.github.io
// @version      0.0.0.1
// @description  Better script installing for Tampermonkey.
// @author       Scriptstaller | scriptstaller.github.io
// @updateURL    https://raw.githubusercontent.com/Scriptstaller/Scriptstaller/master/dev/Scriptstaller.user.js
// @downloadURL  https://raw.githubusercontent.com/Scriptstaller/Scriptstaller/master/dev/Scriptstaller.user.js
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

console.log("CAUTION! You are using a developer build of Scriptstaller.");
console.log("Scriptstaller ready!");

navigator.registerProtocolHandler(
    'web+test', 'http://example.com/rph?q=%s', 'My App');
