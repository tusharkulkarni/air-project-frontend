if(Meteor.isClient){
	Accounts.onLogin(function(){		
		FlowRouter.go('main');
		
	});
	Accounts.onLogout(function(){
		FlowRouter.go('home');		
	});
}

FlowRouter.route('/',{
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout', {header: 'homeheader'});
	} 
});

FlowRouter.route('/main',{
	name: 'main',
	action() {
		console.log('userId : ' + Meteor.userId())
		var account = UserProfiles.findOne({'author': Meteor.userId()});
		//
		userAccount = UserProfiles.find({'author': Meteor.userId()}).count();
		if(userAccount == 1){
			console.log('*******Routing to Recipes page********');
			BlazeLayout.render('MainLayout', {main: 'Recipes', header: 'login'});
			
		}else{
			console.log('*******Routing to Settings page User Profile Creation********');
			BlazeLayout.render('MainLayout', {main: 'SettingsFirst', header: 'login'});
		}
	}
});


FlowRouter.route('/settings',{
	name: 'settings',
	action() {
		console.log('*******Routing to Settings Page********');
		BlazeLayout.render('MainLayout', {main: 'SettingsNext', header: 'login'});
	} 
});

FlowRouter.route('/recipe',{
	name: 'recipe',
	action() {
		console.log('*******Routing to Recipes Page********');
		BlazeLayout.render('MainLayout', {main: 'Recipes', header: 'login'});
	} 
});

FlowRouter.route('/articles',{
	name: 'articles',
	action() {
		console.log('*******Routing to articles Page********');
		BlazeLayout.render('MainLayout', {main: 'Articles', header: 'login'});
	} 
});


FlowRouter.route('/food-diary',{
	name: 'food-diary',
	action() {
		console.log('*******Routing to food-diary Page********');
		BlazeLayout.render('MainLayout', {main: 'Diary', header: 'login'});
	} 
});


