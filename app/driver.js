var Backbone = require('backbone');
import Mn from 'backbone.marionette';
// var SLayoutView = require('./views/layout_view');
// var SkillList = require('./collections/skill_list');
// var LearningItems = require('./collections/learning_items');
// var learningItemModel = require('./models/learning-item');

var initialData = [

  {
    name: "grammar",
    items: [
      {text: 'countable nouns with \'much\' and \'many\'', level: 'starting'},
      {text: 'future conditionals', level: 'in progress'}
    ]
  }
  ,

  {
    name: "pronunciation",
    items: [
      {text: 'relationship', level: 'done'},
      {text: 'strength', level: 'in progress'},
      {text: 'latchstring', level: 'starting'}
    ]
  },

  {
    name: "vocabulary",
    items: [
      {text: 'plinth', level: 'done'},
      {text: 'catafalque', level: 'in progress'},
      {text: 'architrave', level: 'starting'}
    ]
  }
];

var app = new Mn.Application({
  onStart: function() {
    const skills = new Backbone.Collection([
      {
        nodeName: 'Parent 1',
        nodes: [
          {nodeName: 'Child 1', nodes: []},
          {nodeName: 'Child 2', nodes: []}
        ],
      },
      {
        nodeName: 'Parent 2',
        nodes: []
      },
    ]);
    // var skills = new SkillList(options.initialData);

    // skills.each(function(skill) {
    //   var learning_items = skill.get('items');
    //   var itemCollection = new LearningItems(learning_items);
    //   skill.set('learning_items', itemCollection);
    // });
    // console.log(skills);
    const TreeNode = Mn.View.extend({
      tagName: 'li',
      template: require('./templates/node-template.html'),
    
      regions: {
        tree: {
          el: 'ul',
          replaceElement: true
        }
      },
    
      onRender() {
        const nodes = this.model.get('nodes');
        
        //show child nodes if they are present
        if (nodes.length) {
          const treeView = new TreeView({
            collection: new Backbone.Collection(nodes),
            el: '#tree'
          });
          
          this.showChildView('tree', treeView);
        }
      }
    });

    const TreeView = Mn.CollectionView.extend({
      tagName: 'ul',
      el: '#progress-hook',
      childView: TreeNode
    });
    
    var slayout = new TreeView({
      el: '#progress-hook',
      collection: skills,
      // model: new learningItemModel()
    });
    console.log("rendering driver DO dW ");
    slayout.render();
  }
});

app.start({initialData: initialData});
