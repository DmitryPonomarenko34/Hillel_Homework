"use strict";

var _jquery = _interopRequireDefault(require("jquery"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _jquery["default"])('#hide').on('click', function () {
  (0, _jquery["default"])('#list').hide();
});
(0, _jquery["default"])('#show').on('click', function () {
  (0, _jquery["default"])('#list').show();
});