if(Meteor.isClient){
	Accounts.onLogin(function(){
		console.log("User verified : " + Meteor.user().emails[0].verified);
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
		BlazeLayout.render('MainLayout', {main: 'Test', header: 'login'});
	}
});