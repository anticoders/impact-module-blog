var randomLine = function() {
  return Fake.sentence();
};

var randomText = function(n) {
  var result = '';
  _.times(n, function() {
    result += Fake.paragraph();
    result += '\n\n\n\n';
  });
  return result;
};

var randomSeo = function() {
  return (Fake.word() + '-' + Fake.word() + '-' + Fake.word()).toLowerCase();
};



Modules.Blog.init.fake = function(m, params) {

  if(!process.env.FAKE) return;
  if(m.Articles.findOne({})) return;
  
  console.log('FAKING DATA FOR MODULE: ' + m.name);

  _.times(20, function() {
    m.Articles.insert({
      title:      randomLine(),
      seo:        randomSeo(),
      summary:    randomLine() + ' ' + randomLine(),
      content:    randomText(15),
      published:  true,
    });
  });

  _.times(12, function() {
    m.Articles.insert({
      title:      randomLine(),
      seo:        randomSeo(),
      summary:    randomLine() + ' ' + randomLine(),
      content:    randomText(15),
      published:  false,
    });
  });

};

