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
		var results = [];
		for (var i = 0; i < arr.length - 1; i++) {
		  if (arr[i + 1] === arr[i]) {
		  	if (!results.includes(arr[i])){
		    results.push(arr[i]);
		  	}	
		  }
		}
		return results;
	},

	removeAndClone: function (arr, valueToRemove) {
		var result = arr.filter(function(currentItem, index) {
		  return arr.indexOf(currentItem) === arr.lastIndexOf(currentItem);
		});
		return result;
	},

	// removeAndClone: function (arr, valueToRemove) {
	// 	var result = arr.filter(function(number) {
	// 	  return number !== valueToRemove;
	// 	});
	// 	return result;
	// },

	findIndexesOf: function (arr, itemToFind) {
		var indexes = [];
		  for(i = 0; i < arr.length; i++) {
		    if (arr[i] === itemToFind){
		      indexes.push(i);
		    }
			}
			return indexes;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		even = [];
		total = 0;
			for (var i = 0; i < arr.length; i++) {
		  	if(i % 2 !== 0) {
		    	even.push(arr[i] * arr[i]);
		  	}
		  }
		  for (var num of even){
		  	total += num;
			}
			return total;
	}

}

module.exports = arrayTasks
