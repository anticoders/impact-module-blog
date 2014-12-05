Modules.Blog.controllers.list = function(m, params) {
  return RouteController.extend({
    
    waitOn: function() {
      return Meteor.subscribe(m.nameFor('articles'));
    },

    data: function() {
      return {
        m: m,
        articles: m.Articles.find({published: true}),
      };
    },

  });
};

