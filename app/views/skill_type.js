var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var FormView = require('./form');
var ListView = require('./list');

var learningItemModel = require('../models/learning-item');

var SkillType = Marionette.LayoutView.extend({

  template: require('../templates/layout.html'),

  regions: {
    form: '.form',
    list: '.list'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onShow: function() {
    console.log("showing skill type");
    var formView = new FormView({model: this.model});
    var listView = new ListView({collection: this.collection});

    this.showChildView('form', formView);
    this.showChildView('list', listView);
  },

  onChildviewAddLearningItem: function(child) {
    this.model.set({
      level: child.ui.level.val(),
      text: child.ui.text.val()
    }, {validate: true});

    var items = this.model.pick('level', 'text');
    this.collection.add(items);
  },

  itemAdded: function() {
    this.model.set({
      level: '',
      text: ''
    });
  }
});

module.exports = SkillType;
