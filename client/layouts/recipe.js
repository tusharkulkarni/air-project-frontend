
Template.Recipe.events({
	'click .toggle-menu': function(){
		console.log('*********************toggle event begins***********************');
		console.log(event.target.id);
		var recipeId = event.target.id;
		var recipeArray = Session.get('recipes');
		console.log(recipeArray);
		console.log('*********************toggle event begins***********************');
		var dateStr =  '' + new Date().getMonth().toString() +'/'+ new Date().getDate().toString() + '/' + new Date().getFullYear().toString();
		Meteor.call('addRecipe', recipeId, dateStr, recipeArray);
	}
});