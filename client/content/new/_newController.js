Modules.Blog.controllers.new = function(m, params) {
  return Impact.controllers.contentController.extend({

    // TODO: Do not insert it immediately?

    action: function() {
      var _id = m.Articles.insert({
        published: false,
      });

      location.replace(
        Router.path(m.nameFor('edit'), {_id: _id})
      );
    },

  });
};

