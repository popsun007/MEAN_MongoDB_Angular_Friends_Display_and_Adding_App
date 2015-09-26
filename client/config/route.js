var friendsApp = angular.module("friendsApp", ['ngRoute']);
friendsApp.config(function($routeProvider)
{
	$routeProvider
	.when("/", {
		templateUrl: "partials/showFriends.html"
	})
	$routeProvider
	.when("/addFriend", {
		templateUrl: "partials/addFriend.html"
	})
});