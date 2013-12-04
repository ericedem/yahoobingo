var util = require('../util');
var assert = require('assert');

describe('utils',function(){
	describe('findNumber',function(){
		var testItems = {
			B: [0, 2, 3, 4, 50],
			I: [0, 1, 2, 3, 40],
			N: [0, 1, 2, 3, 40],
			G: [0, 1, 2, 3, 40],
			O: [0, 1, 2, 3, 40]
		};

		it('should find B3',function(){
			var result = util.findNumber(testItems,'B3');
			assert.notEqual(result, null);
			assert.strictEqual(result.row, 'B');
			assert.strictEqual(result.col, 2);
		});

		it('should find N40',function(){
			var result = util.findNumber(testItems,'N40');
			assert.notEqual(result, null);
			assert.strictEqual(result.row, 'N');
			assert.strictEqual(result.col, 4);
		});

		it('should not find B52',function(){
			var result = util.findNumber(testItems, 'B52');
			assert(result === null);
		});
	});

	var testEntries = {
		slots: {
			B: [true, false, false, false, false],
			I: [true, false, false, false, false],
			N: [true, true, true, true, true],
			G: [true, false, false, false, false],
			O: [true, false, false, false, false]
		}
	}

	describe('checkRow', function(){
		it('row N is bingo',function(){
			var result = util.checkRow(testEntries.slots, 'N');
			assert.equal(result,true);
		});

		it('row B is not bingo',function(){
			var result = util.checkRow(testEntries.slots, 'B');
			assert.equal(result,false);
		});
	});

	describe('checkCol', function(){
		it('col 0 is bingo', function(){
			var result = util.checkCol(testEntries.slots, 0);
			assert.equal(result,true);
		});

		it('col 1 is not bingo', function(){
			var result = util.checkCol(testEntries.slots, 1);
			assert.equal(result,false);
		});
	});

	describe('checkLeftDiag', function(){
		it('should be false', function(){
			var result = util.checkLeftDiag(testEntries.slots);
			assert.equal(result,false);
		});

		it('should be true', function(){
			var slots = {
				B: [true, false, false, false, false],
				I: [true, true, false, false, false],
				N: [true, true, true, true, true],
				G: [true, false, false, true, false],
				O: [true, false, false, false, true]
			}

			var result = util.checkLeftDiag(slots);
			assert.equal(result,true);
		});
	})

	describe('checkRightDiag', function(){
		it('should be false', function(){
			var result = util.checkRightDiag(testEntries.slots);
			assert.equal(result.false);
		});

		it('should be true', function(){
			var slots = {
				B: [true, false, false, false, true],
				I: [true, false, false, true, false],
				N: [true, true, true, true, true],
				G: [true, true, false, true, false],
				O: [true, false, false, false, true]
			}

			var result = util.checkRightDiag(slots);
			assert.equal(result,true);
		});
	})
});