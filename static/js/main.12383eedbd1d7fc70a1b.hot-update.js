webpackHotUpdate("main",{

/***/ "./app/views/layout_view.js":
/*!**********************************!*\
  !*** ./app/views/layout_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Backbone = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\nvar Marionette = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/core/backbone.marionette.js\");\nvar _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n\nvar learningItemView = Marionette.ItemView.extend({\n\n  tagName: \"li\",\n  // template:require('../templates/item.html'),\n  // ui: {\n  //   text: '#text'\n  // },\n  \n  // onRender: function() {\n  //   var txt = this.getUI('text');\n  //   // console.log(\"ooossso\");\n  //   // console.log(this.collection.get('level'));\n  //   // txt.addClass(this.collection.get('level'));\n  // }\n\n});\n\nvar SkillView = Marionette.View.extend({\n\n  // initialize: function(){\n  //   this.collection = this.model.get('learning_items');\n  //   this.name = this.model.get('name');\n  //   console.log(this.name);\n  // },\n  tagName: 'li',\n  template: __webpack_require__(/*! ../templates/skill.html */ \"./app/templates/skill.html\"),\n  \n  regions: {\n    body: {\n      el: 'li',\n      replaceElement: true\n    }\n  },\n  // childView: learningItemView,\n  // childViewContainer: 'ul',\n  onRender() {\n  \tconst nodes = this.model.get('items');\n    \n    //show child nodes if they are present\n    if (nodes.length) {\n      const treeView = new TreeView({\n        collection: new Backbone.Collection(nodes)\n      });\n      \n      this.showChildView('tree', treeView);\n    }\n  }\n});\n\nvar LayoutView = Marionette.CollectionView.extend({\n\n  // initialize: function() {\n  //   console.log('am I here?');\n  //   console.log(this.collection);\n  //   console.log('am I here?');\n  // },\n  tagName: 'ul',\n  childView: SkillView\n});\n\nmodule.exports = LayoutView;\n\n\n//# sourceURL=webpack:///./app/views/layout_view.js?");

/***/ })

})