var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var _ = require('underscore');

// var learningItemView = Marionette.ItemView.extend({

//   tagName: "li",
//   // template:require('../templates/item.html'),
//   // ui: {
//   //   text: '#text'
//   // },
  
//   // onRender: function() {
//   //   var txt = this.getUI('text');
//   //   // console.log("ooossso");
//   //   // console.log(this.collection.get('level'));
//   //   // txt.addClass(this.collection.get('level'));
//   // }

// });

var SkillView = Marionette.View.extend({

  // initialize: function(){
  //   this.collection = this.model.get('learning_items');
  //   this.name = this.model.get('name');
  //   console.log(this.name);
  // },
  tagName: 'li',
  template: require('../templates/skill.html'),
  
  regions: {
    body: {
      el: 'li',
      replaceElement: true
    }
  },
  // childView: learningItemView,
  // childViewContainer: 'ul',
  onRender() {
  	const nodes = this.model.get('nodes');
    
    //show child nodes if they are present
    if (nodes.length) {
      const treeView = new LayoutView({
        collection: new Backbone.Collection(nodes)
      });
      
      this.showChildView('body', treeView);
    }
  }
});

const SLayoutView = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: SkillView
});

module.exports = SkillView;
