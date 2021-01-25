"use strict";

module.exports = class StringCalculator {
	
	Add(stringNumber) {
		// Return 0 if String is empty.
		if (!stringNumber) return 0; 
	                    
		if (stringNumber.indexOf("//") == 0) {
			var delimiter = new RegExp("\n|,|" + stringNumber.substring(2, stringNumber.indexOf('\n'))),
				subString = stringNumber.substring(stringNumber.indexOf('\n') + 1, stringNumber.length),
				splitString = subString.split(delimiter);
	    			console.log(splitString);
		} else {
			var splitString = stringNumber.split(/,|\n/);
		}

		var sum = 0,
			neg = [];
		
		for (var i = 0; i < splitString.length; i++) {
			if (parseInt(splitString[i]) < 0) neg.push(splitString[i]);
			else if (splitString[i] < 1001) sum += parseInt(splitString[i]);
		}
		if (neg.length > 0){
			throw new Error('Negetives not allowed' + neg);
		}
		return sum;
	}
}
