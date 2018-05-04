var Backbone = require('backbone');

LearningItem = Backbone.Model.extend({});

LearningItems = Backbone.Collection.extend({
  model: LearningItem
});

module.exports = LearningItems;
