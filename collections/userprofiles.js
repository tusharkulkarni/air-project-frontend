UserProfiles = new Mongo.Collection('userProfiles');

UserProfiles.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
})

Nutrients = new SimpleSchema({
	amount: {
		type: String,
		autoform:{
			type:"hidden"
		}
	},
	title: {
		type: String,
		autoform:{
			type:"hidden"
		}
	},
	unit: {
		type: String,
		autoform:{
			type:"hidden"
		}
	}
})

Recipes = new SimpleSchema({
	imageUrl: {
		type: String,
		autoform:{
			type:"hidden"
		}
	},
	nutrients: {
		type: [Nutrients],
		autoform:{
			type:"hidden"
		}
	},
	
	readyInMinutes: {
		type: String,
		autoform:{
			type:"hidden"
		}
	},

	recipeId: {
		type: String,
		autoform:{
			type:"hidden"
		}
	},
	title: {
		type: String,
		autoform:{
			type:"hidden"
		}
	},
	url: {
		type: String,
		autoform:{
			type:"hidden"
		}
	},
	vegan: {
		type: String,
		autoform:{
			type:"hidden"
		}
	},

	vegetarian: {
		type: String,
		autoform:{
			type:"hidden"
		}
	},
	date:{
		type: String,
		autoform:{
			type:"hidden"
		}
	}
	
})



ProfileSchema = new SimpleSchema({
	recipes: {
		type: [Recipes],
		optional: true,
		autoform:{
			type:"hidden"
		}
	},
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
	gender: {
	    type: String,
	    autoform: {
	      type: "select",
	      options: function () {
	        return [
	          {label: "Male", value: "Male"},
	          {label: "Female", value: "Female"}
	        ];
	      }
	    }
	},
	height: {
		type: Number,
		label: "Height"
	},
	heightIN: {
	    type: String,
	    label: "Height given in",
	    autoform: {
	      type: "select",
	      options: function () {
	        return [
	          {label: "cms", value: "m"},
	          {label: "inches", value: "ft"}
	        ];
	      }
	    }
	},
	weight: {
		type: Number,
		label: "Weight"
	},
	weightIN: {
	    type: String,
	    label: "Weight given in",
	    autoform: {
	      type: "select",
	      options: function () {
	        return [
	          {label: "lbs", value: "lbs"},
	          {label: "kg", value: "kg"}
	        ];
	      }
	    }
	},
	activityLevel: {
	    type: String,
	    label: "Activity Level",
	    autoform: {
	      type: "select",
	      options: function () {
	        return [
	          {label: "Sedentary (no exercise)", value: "0"},
	          {label: "Low active (walks about 2 miles daily at 3-4 mph)", value: "1"},
	          {label: "Active (walks about 7 miles daily at 3-4 mph", value: "2"},
	          {label: "Very active (walks about 17 miles daily at 3-4 mph)", value: "3"}
	        ];
	      }
	    }
	},
	disease: {
	    type: String,
	    label: "Disease",
	    autoform: {
	      type: "select",
	      options: function () {
	        return [
	          {label: "Diabetes", value: "diabetes"},
	          {label: "Kidney disease", value: "renal"},
	          {label: "Heart Disease", value: "heart"}
	        ];
	      }
	    }
	},
	cuisine: {
	    type: String,
	    label: "Cuisine you like",
	    autoform: {
	      type: "select",
	      options: function () {
	        return [
	          {label: "Chinese", value: "chinese"},
	          {label: "Japanese", value: "japanese"},
	          {label: "Korean", value: "korean"},
			  {label: "Vietnamese", value: "vietnamese"},
	          {label: "Indian", value: "indian"},
	          {label: "British", value: "british"},
	          {label: "French", value: "french"},
	          {label: "Italian", value: "italian"},
	          {label: "Mexican", value: "mexican"},
	          {label: "Spanish", value: "spanish"},
	          {label: "American", value: "american"},
	          {label: "Greek", value: "greek"},
			  {label: "German", value: "german"}	          
	        ];
	      }
	    }
	},
	excludeIngredients: {
		type: String,
		defaultValue: "undefined",
		optional: true,
		autoform:{
			type:"hidden"
		}
	},
	intolerances: {
		type: [String],
		optional: true,
		label: "Intolerances"
	},
	includeIngredients: {
		type: String,
		defaultValue: "salt",
		optional: true,
		autoform:{
			type:"hidden"
		}
	},
	maxCarbs: {
		type: Number,
		label: "Maximum Carbohydrate intake desired (optional)",
		defaultValue: "1500",
		optional: true
	},
	maxCalories: {
		type: Number,
		label: "Maximum Calories intake desired (optional)",
		defaultValue: "1500",
		optional: true
	},	
	maxFat: {
		type: Number,
		label: "Maximum Fat intake desired (optional)",
		defaultValue: "1500",
		optional: true
	},
	maxProtein: {
		type: Number,
		label: "Maximum Protein intake desired (optional)",
		defaultValue: "1500",
		optional: true
	},
	
	minCalories: {
		type: String,
		defaultValue: "5",
		optional: true,
		autoform:{
			type:"hidden"
		}
	},
	minCarbs: {
		type: String,
		defaultValue: "5",
		optional: true,
		autoform:{
			type:"hidden"
		}
	},
	minFat: {
		type: String,
		defaultValue: "5",
		optional: true,
		autoform:{
			type:"hidden"
		}
	},
	minProtein: {
		type: String,
		defaultValue: "5",
		optional: true,
		autoform:{
			type:"hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	}
});

UserProfiles.attachSchema( ProfileSchema );


Meteor.methods({
	addRecipe: function(recipeId, dateStr, recipeArray){
		console.log('*************addRecipe begins***************');
		console.log(recipeArray);
		var arrayLength = recipeArray.length;
		for (var i = 0; i < arrayLength; i++) {
    		var recipeObj = recipeArray[i];
    		if(recipeObj.recipeId == recipeId){
    			break;
    		}
		}
		
        var dynamicItem = {};
		
		var oldRecipes = UserProfiles.findOne({'author': Meteor.userId()}).recipes;

        if(oldRecipes == undefined){
        	console.log('******initialize recipes array******');        	
        	dynamicItem["recipes"] = [];        	
        	UserProfiles.update({author : this.userId}, { $set: dynamicItem});
        }
    	console.log('****************updating recipe array*********************'); 

    	recipeObj["date"] = dateStr;
    	dynamicItem["recipes"] = recipeObj;   
    	console.log('recipeObj with date : ');
    	console.log(recipeObj) 	;
    	UserProfiles.update({author : this.userId}, { $push: dynamicItem});
   }
});
