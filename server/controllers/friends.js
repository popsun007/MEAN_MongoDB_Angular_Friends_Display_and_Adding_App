//back-end controller
var mongoose = require('mongoose');
var Friends = mongoose.model('friends');
module.exports = (function()
	{
		return {show: function(req, res)
				{
					Friends.find({}, function(err, data)
					{
						if(err)
						{
							console.log(err);
						}
						else
						{
							res.json(data);
						}
					})
				},
			createFriend: function(req, res)
				{
					// console.log("req" + req.body);
					// console.log("res" + res.body);

					var new_friend = new Friends(req.body)
					new_friend.save(function(err, data)
					{
						if(err)
						{
							console.log(err);
						}
						else
						{
							// res.json(data)
							console.log("success");
						}
					})
				}
		}
	})()