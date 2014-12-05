var schema = new SimpleSchema({

  title:      {type: String, optional: true,},
  seo:        {type: String, optional: true,},
  summary:    {type: String, optional: true,},
  content:    {type: String, optional: true,},
  published:  {type: Boolean,},

});


Template.blog_edit.helpers({
  schema: function() {
    return schema;
  },

});


Template.blog_edit.events({
  'click .__publish': function(e, t) {
    t.data.m.Articles.update(t.data.article._id, {$set: {
      published: true,
    }});
  },

  'click .__unpublish': function(e, t) {
    t.data.m.Articles.update(t.data.article._id, {$set: {
      published: false,
    }});
  },

  'keyup .__trigger': _.debounce(function(e, t) {
    save(t.data.m, t.data.article, $(t.find('form')).formToJSON());
  }, 250),

});

Template.blog_edit.destroyed = function() {
  save(this.data.m, this.data.article, $(this.find('form')).formToJSON());
};

var save = function(m, old, document) {
  m.Articles.update(old._id, {$set: document});
};




// /* TODO: move the scroll to inside of the template AFTER converting to Blaze */
// var scroll = 0;



// Template.blog_edit.created = function() {
//   scroll = 0;
// };

// Template.blog_edit.rendered = function() {
//   // Crater.go(this);
//   // Rainbow.color();
//   // console.log("RENDERED", this.data.scroll);
//   _.each(this.findAll('.zenTextarea'), function(textarea) {
//     $(textarea).autogrow();
//   });
//   restoreScroll(this);

//   var t = this;

//   // Crater.events(this, {
//   //   'toggle .blog_edit_publishedField': function(e) {
//   //     changed(e, t);
//   //   },
//   // });
// };


// /*
//   UI (scroll) manipulation and restoring
// */

// var saveScroll = function(t) {
//   // console.log("SSC1", t.data.scroll);
//   // t.data.scroll = $(t.find('.zenBox')).scrollTop();
//   scroll = $(t.find('.zenBox')).scrollTop();
//   // console.log("SSC2", t.data.scroll);
// };

// var restoreScroll = function(t) {
//   // console.log("RES", t, t.data.scroll);
//   // $(t.find('.zenBox')).scrollTop(t.data.scroll);
//   $(t.find('.zenBox')).scrollTop(scroll);
// };


// /*
//   Saving changes
// */

// var changed = function(e, t) {
//   noticeAboutChanges(e, t);
//   saveChanges(e, t);
// };

// var noticeAboutChanges = _.debounce(function(e, t) {
//   $(t.find('.blog_edit_savingButton')).html('Changed');
// }, 3000, true);

// var saveChanges = _.debounce(function(e, t) {
//   // $(t.find('.blog_edit_savingButton')).html('Saving...');
//   saveScroll(t);
//   console.log("IS PUBLISHED?", $(t.find('.blog_edit_publishedField')).data('value'), typeof $(t.find('.blog_edit_publishedField')).data('value'));
//   Modules.Blog.Articles.update(t.data.article._id, {$set:{
//     published: $(t.find('.blog_edit_publishedField')).data('value'),
//     title:   $(t.find('#blog_edit_titleField')).val(),
//     seo:     $(t.find('#blog_edit_seoField')).val(),
//     summary: $(t.find('#blog_edit_summaryField')).val(),
//     content: $(t.find('#blog_edit_contentField')).val(),
//   }}, function() {
//     $(t.find('.blog_edit_savingButton')).html('Saved');
//   });
// }, 4000);




// Template.blog_edit.events({

//   'click #blog_edit_publishButton': function(e, t) {
//     // saveScroll();
//   },

//   'mousedown .blog_edit_AddMediaButton': function(e, t) {
//     // var field = $('.blog_edit_contentField').get()[0];

//     // Media.get(function (err, result) {
//     //   if (err) {
//     //     console.log(err);
//     //   } else {
//     //     console.log('RESULT:', result);
//     //   }
//     // });

//     //if(typeof field.selectionEnd === 'undefined') return;

//     //var endIndex = field.selectionEnd;
//     //var value = field.value;
//     //field.value = value.slice(0, endIndex) + '[++]' + value.slice(endIndex);
//     //setTimeout(function(){
//     //  $(field).focus();
//     //  field.setSelectionRange(endIndex, endIndex);
//     //}, 1);
//   },


//   'keyup .blog_edit_trigger': changed,

// });



