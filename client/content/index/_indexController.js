Modules.Blog.controllers.index = function(m, params) {
  return Impact.controllers.contentController.extend({
    
    waitOn: function() {
      return Meteor.subscribe(m.nameFor('allArticles'));
    },

    data: function() {
      return {
        impact: {
          bulbs: 'Content',
          bulb: m.nameFor(),
          subbulb: 'list',
        },
        m: m,
        articles: m.Articles.find({}, {
          sort: {createdAt: -1}
        }),
      };
    },

  });
};

