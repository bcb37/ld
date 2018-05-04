webpackHotUpdate("main",{

/***/ "./app/collections/learning_items.js":
false,

/***/ "./app/collections/skill_list.js":
false,

/***/ "./app/driver.js":
/*!***********************!*\
  !*** ./app/driver.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var backbone_marionette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/core/backbone.marionette.js\");\n/* harmony import */ var backbone_marionette__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone_marionette__WEBPACK_IMPORTED_MODULE_0__);\nvar Backbone = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\n\n// var SLayoutView = require('./views/layout_view');\n// var SkillList = require('./collections/skill_list');\n// var LearningItems = require('./collections/learning_items');\n// var learningItemModel = require('./models/learning-item');\n\nvar initialData = [\n\n  {\n    name: \"grammar\",\n    items: [\n      {text: 'countable nouns with \\'much\\' and \\'many\\'', level: 'starting'},\n      {text: 'future conditionals', level: 'in progress'}\n    ]\n  }\n  ,\n\n  {\n    name: \"pronunciation\",\n    items: [\n      {text: 'relationship', level: 'done'},\n      {text: 'strength', level: 'in progress'},\n      {text: 'latchstring', level: 'starting'}\n    ]\n  },\n\n  {\n    name: \"vocabulary\",\n    items: [\n      {text: 'plinth', level: 'done'},\n      {text: 'catafalque', level: 'in progress'},\n      {text: 'architrave', level: 'starting'}\n    ]\n  }\n];\n\nvar app = new backbone_marionette__WEBPACK_IMPORTED_MODULE_0___default.a.Application({\n  onStart: function() {\n    const skills = new Backbone.Collection([\n      {\n        nodeName: 'Parent 1',\n        nodes: [\n          {nodeName: 'Child 1', nodes: []},\n          {nodeName: 'Child 2', nodes: []}\n        ],\n      },\n      {\n        nodeName: 'Parent 2',\n        nodes: []\n      },\n    ]);\n    // var skills = new SkillList(options.initialData);\n\n    // skills.each(function(skill) {\n    //   var learning_items = skill.get('items');\n    //   var itemCollection = new LearningItems(learning_items);\n    //   skill.set('learning_items', itemCollection);\n    // });\n    // console.log(skills);\n    const TreeNode = backbone_marionette__WEBPACK_IMPORTED_MODULE_0___default.a.View.extend({\n      tagName: 'li',\n      template: __webpack_require__(/*! ./templates/node-template.html */ \"./app/templates/node-template.html\"),\n    \n      regions: {\n        tree: {\n          el: 'ul',\n          replaceElement: true\n        }\n      },\n    \n      onRender() {\n        const nodes = this.model.get('nodes');\n        \n        //show child nodes if they are present\n        if (nodes.length) {\n          const treeView = new TreeView({\n            collection: new Backbone.Collection(nodes)\n          });\n          \n          this.showChildView('tree', treeView);\n        }\n      }\n    });\n\n    const TreeView = backbone_marionette__WEBPACK_IMPORTED_MODULE_0___default.a.CollectionView.extend({\n      tagName: 'ul',\n      childView: TreeNode\n    });\n    \n    var slayout = new TreeView({\n      el: '#progress-hook',\n      collection: skills,\n      // model: new learningItemModel()\n    });\n    console.log(\"rendering driver\");\n    slayout.render();\n  }\n});\n\napp.start({initialData: initialData});\n\n\n//# sourceURL=webpack:///./app/driver.js?");

/***/ }),

/***/ "./app/models/learning-item.js":
false,

/***/ "./app/templates/skill.html":
false,

/***/ "./app/views/layout_view.js":
false

})