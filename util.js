function findNumber(slots, number){
	var result = /([A-Z])(\d+)/.exec(number);
	var letter = result[1];
	var number = parseInt(result[2],10);

	var row = slots[letter];

	for (var i = 0; i < row.length; i++){
		if (row[i] === number){
			return {
				row: letter,
				col: i
			};
		}
	}
	return null;
}
module.exports.findNumber = findNumber;

function checkRow(slots, row){
	for (var i = 0; i < slots[row].length; i++){
		if (slots[row][i] === false){
			return false;
		}
	}
	return true;
}
module.exports.checkRow = checkRow;

function checkCol(slots, col){
	for (var key in slots){
		if (slots[key][col] === false){
			return false;
		}
	}
	return true;
}
module.exports.checkCol = checkCol;

function checkLeftDiag(slots){
	var rows = ['B','I','N','G','O'];

	for (var i = 0; i < 5; i++){
		if (slots[rows[i]][i] === false){
			return false;
		}
	}
	return true;
}
module.exports.checkLeftDiag = checkLeftDiag;

function checkRightDiag(slots){
	var rows = ['B','I','N','G','O'];

	for (var i = 0; i < 5; i++){
		if (slots[rows[i]][4-i] === false){
			return false;
		}
	}
	return true;
}
module.exports.checkRightDiag = checkRightDiag;