webpackHotUpdate("main",{

/***/ "./app/templates/skill.html":
/*!**********************************!*\
  !*** ./app/templates/skill.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(obj){\nvar __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\nwith(obj||{}){\n__p+='<h1>'+\n((__t=(name))==null?'':__t)+\n'</h1><ul></ul>';\n}\nreturn __p;\n};\n\n\n//# sourceURL=webpack:///./app/templates/skill.html?");

/***/ }),

/***/ "./app/views/layout_view.js":
/*!**********************************!*\
  !*** ./app/views/layout_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Backbone = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\nvar Marionette = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/core/backbone.marionette.js\");\nvar _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n\nvar learningItemView = Marionette.ItemView.extend({\n\n  tagName: \"li\",\n  template:__webpack_require__(/*! ../templates/item.html */ \"./app/templates/item.html\"),\n  // ui: {\n  //   text: '#text'\n  // },\n  \n  // onRender: function() {\n  //   var txt = this.getUI('text');\n  //   // console.log(\"ooossso\");\n  //   // console.log(this.collection.get('level'));\n  //   // txt.addClass(this.collection.get('level'));\n  // }\n\n});\n\nvar SkillView = Marionette.CollectionView.extend({\n\n  initialize: function(){\n    this.collection = this.model.get('learning_items');\n    this.name = this.model.get('name');\n    console.log(this.name);\n  },\n  tagName: 'ul',\n  template: __webpack_require__(/*! ../templates/skill.html */ \"./app/templates/skill.html\"),\n\n  childView: learningItemView,\n  // childViewContainer: 'ul',\n});\n\nvar LearningList = Marionette.CollectionView.extend({\n\n  initialize: function() {\n    console.log('am I here?');\n    console.log(this.collection);\n    console.log('am I here?');\n  },\n  childView: SkillView\n});\n\nmodule.exports = LearningList;\n\n\n//# sourceURL=webpack:///./app/views/layout_view.js?");

/***/ })

})