webpackHotUpdate("main",{

/***/ "./app/models/learning-item.js":
/*!*************************************!*\
  !*** ./app/models/learning-item.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Backbone = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\n\n\nvar learningItemModel = Backbone.Model.extend({\n  defaults: {\n    level: '',\n    text: '',\n    other: 'FOO'\n  },\n\n  validate: function(attrs) {\n    var errors = {};\n    var hasError = false;\n    if (!attrs.level) {\n      errors.level = 'level must be set';\n      hasError = true;\n    }\n    if (!attrs.text) {\n      errors.text = 'text must be set';\n      hasError = true;\n    }\n\n    if (hasError) {\n      return errors;\n    }\n  }\n});\n\nmodule.exports = learningItemModel;\n\n\n//# sourceURL=webpack:///./app/models/learning-item.js?");

/***/ })

})