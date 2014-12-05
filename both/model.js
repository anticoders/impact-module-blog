
/*
  title         // string
  seo           // string
  summary       // markdown
  content       // unimark
  published     // boolean

  createdAt     // moment
  publishedAt   // moment
  updatedAt     // moment
*/


Modules.Blog.init.db = function(m, params) {
  m.Articles = new Meteor.Collection(params.name + '_articles');

  m.Articles.attachSchema(new SimpleSchema({
    title:        {type: String, optional: true},
    seo:          {type: String, optional: true},
    summary:      {type: String, optional: true},
    content:      {type: String, optional: true},
    published:    {type: Boolean},

    createdAt: {
      type: Date,
      autoValue: function() {
        if(this.isInsert) return new Date();
        this.unset();
      },
    },

    updatedAt: {
      type: Date,
      autoValue: function() {
        return new Date();
      },
    },

    publishedAt: {
      type: Date,
      optional: true,
      autoValue: function() {
        if(this.field('published').value && !this.isSet) {
          return new Date();
        }
        this.unset();
      },
    },

  }));
};


