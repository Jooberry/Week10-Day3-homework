var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
		for (var item of arr1){
			newArray.push(item)
		}
		for (var item of arr2){
			newArray.push(item)
		}
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArray = [];
		for (var item of arr){
			newArray.push(item * item)
		}
		return newArray;
	},

	sum: function (arr) {
		total = 0;
		for (var item of arr){
		  total += item;
		}
		return total;
	},

	findDuplicates: function (arr) {
		
	},

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
