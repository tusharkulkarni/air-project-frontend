Template.Articles.rendered = function () {   
      var myDetails = UserProfiles.findOne({author: Meteor.userId()});
      var myPreferences = myDetails.articleFacets;
    var myLifestyle = myDetails.activityLevel;

      console.log('=============================================');
      console.log('myPreferences : '+myPreferences + 'myLifestyle: '+myLifestyle);
      console.log('=============================================');
     console.log('Disease : '+myDetails.disease);
      Meteor.call("getRSSFeeds", myDetails.disease, myPreferences, myLifestyle , function(err, res) {
      // The method call sets the Session variable to the callback value
      console.log('**************Articles.rendered***************');
      console.log(res);
      if (err) { 
        Session.set('articles', {error: err});
        console.log(err);
      } else {
        Session.set('articles', res.feed);
        Session.set('facets', res.facets);
        console.log(res.feed);
        console.log(res.facets);
      }
    });
}

Template.Articles.helpers({
  facets: function () {    
    console.log('Displaying facets: ');
    console.log(Session.get('facets'));
    return Session.get('facets');
  },
  articles: function () {    
    console.log(Session.get('articles'));
    return Session.get('articles');
  }
});



