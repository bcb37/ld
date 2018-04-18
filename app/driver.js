var Backbone = require('backbone');
var Marionette = require('backbone.marionette');  // 1

var ItemView = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('./templates/item.html')
});


var GrammarList = Marionette.CompositeView.extend({
  el: '#grammar-hook',
  template: require('./templates/item_list.html'),

  childView: ItemView,
  childViewContainer: 'ul',

  ui: {
    text: '#id_text',
    form: 'form',
    level: '#id_level'
  },

  triggers: {
    'submit @ui.form': 'add:grammar:item'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onAddGrammarItem: function() {
    this.collection.add({
      text: this.ui.text.val(),
      level: this.ui.level.val()
    });
  },

  itemAdded: function() {
    this.ui.text.val('');
    this.ui.level.val('');
  }

});

var grammar = new GrammarList({
  collection: new Backbone.Collection([
    {text: 'countable nouns with \'much\' and \'many\'', level: 'done'},
    {text: 'future conditionals', level: 'in progress'}
  ])
});

var PronunciationList = Marionette.CollectionView.extend({
  el: '#pronunciation-hook',
  tagName: 'ul',

  childView: ItemView
});

var pronunciation = new PronunciationList({
  collection: new Backbone.Collection([
    {text: 'relationship', level: 'done'},
    {text: 'strength', level: 'in progress'}
  ])
});

grammar.render();
pronunciation.render();
