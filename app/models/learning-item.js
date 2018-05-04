var Backbone = require('backbone');


var learningItemModel = Backbone.Model.extend({
  defaults: {
    level: '',
    text: '',
    other: 'FOO'
  },

  validate: function(attrs) {
    var errors = {};
    var hasError = false;
    if (!attrs.level) {
      errors.level = 'level must be set';
      hasError = true;
    }
    if (!attrs.text) {
      errors.text = 'text must be set';
      hasError = true;
    }

    if (hasError) {
      return errors;
    }
  }
});

module.exports = learningItemModel;
