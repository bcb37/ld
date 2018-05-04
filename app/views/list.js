var Marionette = require('backbone.marionette');

var ItemView = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('../templates/item.html')
});

var LearningList = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: ItemView
});

module.exports = LearningList;
