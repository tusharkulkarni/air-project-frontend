Template.Diary.helpers({
  diaryItems: function () {
    console.log('****** Displaying Diary******');
    console.log(UserProfiles.findOne({'author': Meteor.userId()}).recipes);
    return UserProfiles.findOne({'author': Meteor.userId()}).recipes;
  }
});