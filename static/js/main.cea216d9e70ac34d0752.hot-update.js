webpackHotUpdate("main",{

/***/ "./app/driver.js":
/*!***********************!*\
  !*** ./app/driver.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Backbone = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\nvar Marionette = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/core/backbone.marionette.js\");  // 1\nvar SLayoutView = __webpack_require__(/*! ./views/layout_view */ \"./app/views/layout_view.js\");\nvar SkillList = __webpack_require__(/*! ./collections/skill_list */ \"./app/collections/skill_list.js\");\nvar LearningItems = __webpack_require__(/*! ./collections/learning_items */ \"./app/collections/learning_items.js\");\nvar learningItemModel = __webpack_require__(/*! ./models/learning-item */ \"./app/models/learning-item.js\");\n\nvar initialData = [\n\n  {\n    name: \"grammar\",\n    items: [\n      {text: 'countable nouns with \\'much\\' and \\'many\\'', level: 'starting'},\n      {text: 'future conditionals', level: 'in progress'}\n    ]\n  }\n  ,\n\n  {\n    name: \"pronunciation\",\n    items: [\n      {text: 'relationship', level: 'done'},\n      {text: 'strength', level: 'in progress'},\n      {text: 'latchstring', level: 'starting'}\n    ]\n  },\n\n  {\n    name: \"vocabulary\",\n    items: [\n      {text: 'plinth', level: 'done'},\n      {text: 'catafalque', level: 'in progress'},\n      {text: 'architrave', level: 'starting'}\n    ]\n  }\n];\n\nvar app = new Marionette.Application({\n  onStart: function(options) {\n    const tree = new SkillList([\n      {\n        nodeName: 'Parent 1',\n        nodes: [\n          {nodeName: 'Child 1', nodes: []},\n          {nodeName: 'Child 2', nodes: []}\n        ],\n      },\n      {\n        nodeName: 'Parent 2',\n        nodes: []\n      },\n    ]);\n    var skills = new SkillList(options.initialData);\n\n    // skills.each(function(skill) {\n    //   var learning_items = skill.get('items');\n    //   var itemCollection = new LearningItems(learning_items);\n    //   skill.set('learning_items', itemCollection);\n    // });\n    // console.log(skills);\n\n    var layout = new SLayoutView({\n      el: '#progress-hook',\n      collection: skills,\n      // model: new learningItemModel()\n    });\n    console.log(\"rendering driver\");\n    layout.render();\n  }\n});\n\napp.start({initialData: initialData});\n\n\n//# sourceURL=webpack:///./app/driver.js?");

/***/ })

})