Meteor.publish('userProfiles',function(){
	return UserProfiles.find({author: this.userId});
});

 Meteor.methods({
        getRecipes: function (obj) {
        	var queryString = 'firstname='+obj.firstname+'&'+'lastname='+obj.lastname+'&'+'age='+obj.Age+'&'+'gender='+obj.gender+'&height='+obj.height+'&heightIN='+obj.heightIN+'&weight='+obj.weight+'&weightIN='+obj.weightIN+'&activityLevel='+obj.activityLevel+'&disease='+obj.disease;
			queryString += '&cuisine='+obj.cuisine+'&excludeIngredients='+obj.excludeIngredients+'&includeIngredients='+obj.includeIngredients+'&maxCalories='+obj.maxCalories+'&intolerances='+obj.intolerances;
			queryString += '&maxCarbs='+obj.maxCarbs+'&maxFat='+obj.maxFat+'&maxProtein='+obj.maxProtein+'&minCalories='+obj.minCalories+'&minCarbs='+obj.minCarbs+'&minFat='+obj.minFat+'&minProtein='+obj.minProtein+'&querywords=*';
			var apiUrl = 'http://localhost:8086/com.tutorial.rest/api/v1/recipe/';
            //var apiUrl = 'http://airrest.ipygdtavtm.us-west-2.elasticbeanstalk.com/api/v1/recipe/';
			//var apiUrl = 'http://localhost:8080/com.tutorial.rest-0.0.1-SNAPSHOT/api/v1/recipe/';
			var finalUrl = apiUrl+queryString;
			console.log(finalUrl);
            this.unblock();
            var response = HTTP.get(finalUrl).data;
            console.log(response);
            return response;
        },
         getRSSFeeds: function (disease, myPreferences, lifestyle) {
            //var apiUrl = 'http://utkkefe93c38.tushk1990.koding.io:8983/solr/rssfeed/select?q=title%3Aexercise&wt=json&indent=true'
            var apiUrl = 'http://localhost:8086/com.tutorial.rest/api/v1/rssFeeds';
        	//var apiUrl = 'http://airrest.ipygdtavtm.us-west-2.elasticbeanstalk.com/api/v1/recipe/rssFeeds/renal';
			//var apiUrl = 'http://localhost:8080/com.tutorial.rest-0.0.1-SNAPSHOT/api/v1/recipe/rssFeeds/renal';
			//var finalUrl = apiUrl+obj;
            var finalUrl = apiUrl+'/'+disease+'/'+myPreferences+'/'+lifestyle;
			console.log(finalUrl);
            this.unblock();
            var response = HTTP.get(finalUrl).data;
            
            console.log('responserecieved : ');
            console.log(response);
          
            return response;


        },
        getRSSFacetedFeeds: function (disease, myPreferences, facet, lifestyle) {
            //var apiUrl = 'http://utkkefe93c38.tushk1990.koding.io:8983/solr/rssfeed/select?q=title%3Aexercise&wt=json&indent=true'
            var apiUrl = 'http://localhost:8086/com.tutorial.rest/api/v1/rssFeeds';
            //var apiUrl = 'http://airrest.ipygdtavtm.us-west-2.elasticbeanstalk.com/api/v1/recipe/rssFeeds/renal';
            //var apiUrl = 'http://localhost:8080/com.tutorial.rest-0.0.1-SNAPSHOT/api/v1/recipe/rssFeeds/renal';
            //var finalUrl = apiUrl+obj;
            var finalUrl = apiUrl+'/'+disease+'/'+myPreferences+'/'+facet+'/'+lifestyle;
            console.log(finalUrl);
            this.unblock();
            var response = HTTP.get(finalUrl).data;
            
            console.log('responserecieved : ');
            console.log(response);
          
            return response;


        }
    });

