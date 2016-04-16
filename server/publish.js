Meteor.publish('userProfiles',function(){
	return UserProfiles.find({username: this.userId});
});