angular.module('Eggly', []).controller('MainCtrl', function() {
  this.categories = [
    {"id": 0, "name": "Development"},
    {"id": 1, "name": "Design"},
    {"id": 2, "name": "Exercise"},
    {"id": 3, "name": "Humor"}
  ];

  this.bookmarks = [
    {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
    {"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development"},
    {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design"},
    {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design"},
    {"id": 4, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise"}
  ];

  this.currentCategory = null;

  this.setCurrentCategory = function(category) {
    this.currentCategory = category;
    this.cancelCreating();
    this.cancelEditing();
  };

  this.isCurrentCategory = function(category) {
    return this.currentCategory !== null && category.name == this.currentCategory.name;
  };

  // Creating and editing states
  this.isCreating = false;
  this.isEditing = false;

  this.startCreating = function() {
    this.isCreating = true;
    this.isEditing = false;
  };

  this.cancelCreating = function() {
    this.isCreating = false;
  };

  this.startEditing = function() {
    this.isCreating = false;
    this.isEditing = true;
  };

  this.cancelEditing = function() {
    this.isEditing = false;
  };

  this.shouldShowCreating = function() {
    return this.currentCategory && !this.isEditing;
  };

  this.shouldShowEditing = function() {
    return this.isEditing && !this.isCreating;
  };
});
