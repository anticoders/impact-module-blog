Modules.Blog.init.publications = function(m, params) {


  Meteor.publish(m.nameFor('article'), function(_id) {
    return m.Articles.find({_id: _id});
  });

  Meteor.publish(m.nameFor('articles'), function() {
    return m.Articles.find({
      published: true,
    }, {
      fields: {
        title: 1,
        seo: 1,
        summary: 1,
        published: 1,
        createdAt: 1,
        updatedAt: 1,
        publishedAt: 1,
      },
    });
  });

  Meteor.publish(m.nameFor('allArticles'), function() {
    return m.Articles.find({}, {
      fields: {
        title: 1,
        seo: 1,
        summary: 1,
        published: 1,
        createdAt: 1,
        updatedAt: 1,
        publishedAt: 1,
      },
    });
  });


};

