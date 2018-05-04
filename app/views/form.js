var Marionette = require('backbone.marionette');

var FormView = Marionette.LayoutView.extend({
  tagName: 'form',
  template: require('../templates/form.html'),

  triggers: {
    submit: 'add:learning:item'
  },

  modelEvents: {
    change: 'render'
  },

  ui: {
    level: '#id_level',
    text: '#id_text'
  }
});

module.exports = FormView;
