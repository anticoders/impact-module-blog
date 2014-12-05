Modules.Blog.controllers.article = function(m, params) {
  return RouteController.extend({
    
    // yieldTemplates: {
    //   'blog_articleToEdit': {to: 'top'},
    // },
          
    waitOn: function() {
      return Meteor.subscribe(m.nameFor('article'), this.params._id);
    },

    data: function() {
      return {
        m: m,
        article: m.Articles.findOne(this.params._id),
      };
    },

  });
};

