webpackHotUpdate("main",{

/***/ "./app/views/layout_view.js":
/*!**********************************!*\
  !*** ./app/views/layout_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Backbone = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\nvar Marionette = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/core/backbone.marionette.js\");\nvar _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n\nvar learningItemView = Marionette.View.extend({\n\n  tagName: \"li\",\n  template:__webpack_require__(/*! ../templates/item.html */ \"./app/templates/item.html\"),\n  ui: {\n    text: '#text'\n  },\n\n  onRender: function() {\n    // var txt = this.getUI('text');\n    // console.log(\"ooossso\");\n    // console.log(this.collection.get('level'));\n    // txt.addClass(this.collection.get('level'));\n  }\n\n});\n\nvar SkillView = Marionette.CompositeView.extend({\n\n  initialize: function(){\n    this.collection = this.model.get('learning_items');\n  },\n  tagName: 'p',\n  template: __webpack_require__(/*! ../templates/skill.html */ \"./app/templates/skill.html\"),\n\n  childView: learningItemView,\n  childViewContainer: 'ul',\n});\n\nvar LearningList = Marionette.CollectionView.extend({\n  tagName: 'div',\n  childView: SkillView\n});\n\nmodule.exports = LearningList;\n\n\n//# sourceURL=webpack:///./app/views/layout_view.js?");

/***/ })

})