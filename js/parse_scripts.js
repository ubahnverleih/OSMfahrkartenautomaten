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

