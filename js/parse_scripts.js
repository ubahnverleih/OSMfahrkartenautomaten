function yesno (value){
	var result;
	var lowerValue = value.toLowerCase();
	switch (lowerValue) {
		case "yes":
			result = "ja";
			break;
		case "no":
			result = "nein";
			break;
		default:
			result = value;
	}
	return result;
}

function stockwerk(value){
	var result;
	switch (value) {
		case "0":
			result = "Erdgeschoss";
			break;
		case "-1":
			result = "1. Untergeschoss";
			break;
		default:
			result = value + ". Stockwerk";
	}
	return result;
}