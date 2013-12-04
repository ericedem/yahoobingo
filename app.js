var util = require('./util');
var io = require('socket.io-client');
//var socket = io.connect('ws://yahoobingo.herokuapp.com');
socket.on('connect',function(){
	client.emit('register',{
		name: "Xor",
		email: 'ericedem@gmail.com'
	});
});

client.on('card',function(card){
	console.log(card);
	var entries = {
		slots: {
			B: [false, false, false, false, false],
			I: [false, false, false, false, false],
			N: [false, false, false, false, false],
			G: [false, false, false, false, false],
			O: [false, false, false, false, false]
		}
	};

	client.on('number',function(number){
		console.log(number);

		var location = util.findNumber(card.slots, number);

		if (location){
			entries.slots[location.row][location.col] = true;

			if(checkRow(entries.slots, location.row) ||
			   checkCol(entries.slots, location.col) ||
			   checkLeftDiag(entries.slots) ||
			   checkRightDiag(entries.slots)){
			   	console.log('bing');
			}
		}
	});
});