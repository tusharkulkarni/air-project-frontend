Template.SettingsNext.helpers({	
	updateUserProfileForm: function() {	
		console.log(UserProfiles.findOne({author: Meteor.userId()})._id);
		console.log('Id of Setting Doc to be updated : ');
		return UserProfiles.findOne({author: Meteor.userId()})._id;
	}
});

Template.SettingsNext.helpers({	
	updateDoc: function() {	
		console.log('Setting Doc to be updated : ');
		console.log(UserProfiles.findOne({author: Meteor.userId()}));	
		return UserProfiles.findOne({author: Meteor.userId()});
	}
});

AutoForm.addHooks('insertUserProfileForm', {
  after: {
    insert: function(error, result) {
      if (error) {
        console.log("Insert Error:", error);
      } else {
        console.log("Document inserted:", result);
        alert('Profile Created!');
        FlowRouter.go('recipe');
        //Router.go('listCalendars');  // or whatever your list route is called
    	}
    }
}
});

