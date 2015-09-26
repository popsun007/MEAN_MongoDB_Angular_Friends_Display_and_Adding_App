friendsApp.factory("friendsFactory", function($http)
{
	// var friends = [
	// 	{name: "Frank", age: 29},
	// 	{name: "Peter", age: 25},
	// 	{name: "Jimmy", age: 25}
	// ]
	factory = {};
	factory.getFriends = function(callback)
		{
			// console.log("am in the factory getFriends method")
		    $http.get('/show_friends').success(function(output) {
		        // console.log("This is Ajax request");
		        callback(output);
		        }) 
		}
	factory.create_friend = function(newFriend, callback)
		{
			console.log(newFriend);
			$http.post('/add_friend', newFriend).success(function(output)
			{
				// console.log(newFriend);
				callback(output);
			})
		}
	return factory;
})

