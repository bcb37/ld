var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
// var SkillTypeView = require('./skill_type');
var SkillTestView = require('./skill_test');
// var learningItemModel = require('../models/learning-item');


var Layout = Marionette.LayoutView.extend({

  template: require('../templates/skill_area.html'),

  onShow: function() {
    console.log("showing layout");
    console.log(this.collection);
    var itemsView = new SkillTestView({
      collection: this.collection
      //model: new learningItemModel()
    });

    this.showChildView('items', itemsView);
    //this.showChildView('title', this.collection.name);
  }

});

module.exports = Layout;
