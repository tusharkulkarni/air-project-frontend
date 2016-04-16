UserProfiles = new Mongo.Collection('userProfiles');

UserProfiles.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
})

ProfileSchema = new SimpleSchema({
	firstname: {
		type: String,
		label: "First Name"
	},
	lastname: {
		type: String,
		label: "Last Name"
	},
	Age: {
		type: Number,
		label: "Age"
	},
	Gender: {
		type: String,
		label: "Gender"
	}
})