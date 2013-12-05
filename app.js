var util = require('./util');
var io = require('socket.io-client');
var client = io.connect('ws://yahoobingo.herokuapp.com');
client.on('connect',function(){
	client.emit('register',{
		name: "Xor",
		email: 'ericedem@gmail.com',
		url: 'https://github.com/ericmedem/yahoobingo'
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
			console.log('number found');
			entries.slots[location.row][location.col] = true;
			console.log(entries.slots);

			if(util.checkRow(entries.slots, location.row) ||
			   util.checkCol(entries.slots, location.col) ||
			   util.checkLeftDiag(entries.slots) ||
			   util.checkRightDiag(entries.slots)){
			   	console.log('bingo');
			   	client.emit('bingo');
			}
		}
	});
});