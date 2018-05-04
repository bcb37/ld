SkillView = Marionette.CompositeView.extend({
  template: "#expandable-group-template",

  className: "expandable-group",

  itemView: LearningItemView,

  itemViewContainer: "ul",

  events: {
    'click a': 'logInfoUrl'
  },

  initialize: function(){
    this.collection = this.model.get('items');
  },

  // logInfoUrl: function(){
  //   console.log(this.model.get('info_url'));
  // }
});
