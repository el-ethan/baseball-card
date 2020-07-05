

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var emotion = require('emotion');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var BaseballCard = function (_a) {
    var name = _a.name, imgPath = _a.imgPath, teamColors = _a.teamColors, position = _a.position;
    return (React.createElement("div", { className: emotion.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            display: flex;\n            background-color: ", ";\n            justify-content: space-between;\n            align-items: center;\n            flex-flow: column;\n            border: 5px solid ", ";\n            width: 450px;\n            height: 650px;\n            padding: 3em;\n        "], ["\n            display: flex;\n            background-color: ", ";\n            justify-content: space-between;\n            align-items: center;\n            flex-flow: column;\n            border: 5px solid ", ";\n            width: 450px;\n            height: 650px;\n            padding: 3em;\n        "])), teamColors.primary, teamColors.secondary) },
        React.createElement(Picture, { pictureUrl: imgPath, color: teamColors.secondary }),
        React.createElement(NameHeader, { name: name, color: teamColors.secondary }),
        position && React.createElement(PositionHeader, { position: position, color: teamColors.secondary })));
};
var Picture = function (_a) {
    var pictureUrl = _a.pictureUrl, color = _a.color;
    return (React.createElement("div", { className: emotion.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            border: 3px solid ", ";\n            height: 650px;\n            width: 100%;\n            background-image: url(", ");\n            background-size: 900px;\n            background-position: center;\n        "], ["\n            border: 3px solid ", ";\n            height: 650px;\n            width: 100%;\n            background-image: url(", ");\n            background-size: 900px;\n            background-position: center;\n        "])), color, pictureUrl) }));
};
var NameHeader = function (_a) {
    var name = _a.name, color = _a.color;
    return (React.createElement("span", { className: emotion.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            align-self: flex-start;\n            color: ", ";\n            font-size: 2em;\n            font-weight: bold;\n        "], ["\n            align-self: flex-start;\n            color: ", ";\n            font-size: 2em;\n            font-weight: bold;\n        "])), color) }, name));
};
var PositionHeader = function (_a) {
    var position = _a.position, color = _a.color;
    return (React.createElement("em", { className: emotion.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            align-self: flex-start;\n            color: ", ";\n            font-size: 1.5em;\n        "], ["\n            align-self: flex-start;\n            color: ", ";\n            font-size: 1.5em;\n        "])), color) }, position));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

exports.BaseballCard = BaseballCard;
//# sourceMappingURL=index.js.map
