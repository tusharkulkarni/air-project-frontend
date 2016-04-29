Template.Recipes.rendered = function () { 
      var myDetails = UserProfiles.findOne({author: Meteor.userId()});
     
      Meteor.call("getRecipes",myDetails, function(err, res) {
      // The method call sets the Session variable to the callback value
      console.log('**************Recipes.rendered***************');
      console.log(res);
      if (err) { 
        Session.set('recipes', {error: err});
        console.log(err);
      } else {
        Session.set('recipes', res);
        console.log(res);
      }
    });
}
 
Template.Recipes.helpers({
  recipes: function () {
    console.log(Session.get('recipes'));
    var recipeArray = Session.get('recipes');
    return recipeArray;
  }
});