Modules.Blog.controllers.edit = function(m, params) {
  return Impact.controllers.contentController.extend({
    
      waitOn: function() {
        return Meteor.subscribe(m.nameFor('article'), this.params._id);
      },

      data: function() {
        return {
          impact: {
            bulbs: 'Content',
            bulb: m.nameFor(),
          },
          m: m,
          article: m.Articles.findOne(this.params._id),
        };
      },

  });
};

