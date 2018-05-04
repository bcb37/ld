var Backbone = require('backbone');

Skill = Backbone.Model.extend({
  other: 'FOO'
});

SkillList = Backbone.Collection.extend({
  model: Skill,
  // template: ""
});

module.exports = SkillList;
