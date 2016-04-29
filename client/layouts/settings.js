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