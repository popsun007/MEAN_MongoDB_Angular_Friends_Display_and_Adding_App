var friendController = require('./../controllers/friends.js');
module.exports = function(app)
	{
		app.get('/show_friends', function (req, res){
			friendController.show(req, res);
		});
		app.post('/add_friend', function (req, res){
			friendController.createFriend(req, res);
		})
	}