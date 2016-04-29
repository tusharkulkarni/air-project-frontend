Template.Articles.rendered = function () { 
      var myDetails = UserProfiles.findOne({author: Meteor.userId()});
     console.log('Disease : '+myDetails.disease);
      Meteor.call("getRSSFeeds", myDetails.disease, function(err, res) {
      // The method call sets the Session variable to the callback value
      console.log('**************Articles.rendered***************');
      console.log(res);
      if (err) { 
        Session.set('articles', {error: err});
        console.log(err);
      } else {
        Session.set('articles', res);
        console.log(res);
      }
    });
}

Template.Articles.helpers({
  articles: function () {
    console.log(Session.get('articles'));
    return Session.get('articles');
  }
});



