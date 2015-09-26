// front-end controller
friendsApp.controller("friendsController", function($scope, friendsFactory)
{
	// console.log("This is controller");
	friendsFactory.getFriends(function(data)
		{
			$scope.friends = data;
		});
	$scope.addFriend = function ()
		{
			var friend_repack = {
				name: $scope.newFriend.name,
				age: parseInt($scope.newFriend.age)
			}
			friendsFactory.create_friend(friend_repack, function(data)
				{
					$scope.friends = data;
				});
			$scope.newFriend = {};
		}
})
