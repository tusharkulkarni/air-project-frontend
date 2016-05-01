Template.Facet.events({
	'click .facet-click': function(){
		console.log('*********************Facet click begins***********************');
		
		var facet = event.target.id;
		var myDetails = UserProfiles.findOne({author: Meteor.userId()});
		var myPreferences = myDetails.articleFacets;
		var myLifestyle = myDetails.activityLevel;

      console.log('=============================================');
      console.log('myPreferences : '+myPreferences + 'myLifestyle: '+myLifestyle);
      console.log('=============================================');
		if(event.target.id.localeCompare("All") == 0 ){
			console.log('Inside if');
			 Meteor.call("getRSSFeeds", myDetails.disease, myPreferences, myLifestyle, function(err, res) {
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
		}else{
				console.log('Inside else');
				Meteor.call("getRSSFacetedFeeds", myDetails.disease, myPreferences, facet, myLifestyle, function(err, res) {
		      // The method call sets the Session variable to the callback value
		      console.log('**************Articles.rendered***************');
		      console.log(res);
		      if (err) { 
		        Session.set('articles', {error: err});
		        console.log(err);
		      } else {
		        Session.set('articles', res.feed);
		        console.log(res.feed);
		        console.log(Session.get('facets'));
		      }
		    });
		}

	}
});


Template.Article.events({
	'click .article-btn': function(){
		console.log('*********************Article click begins***********************');		
		var articleFacet = event.target.id;			
		Meteor.call("addInterests", articleFacet);
	}
});