function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

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
	if (isNumeric(value)){
		if (value == "0")
			result = "Erdgeschoss";
		if (parseFloat(value)>0)
			result = value + ". Obergeschoss";
		if (parseFloat(value)<0)
			result = parseFloat(value)*-1 + ". Untergeschoss";
		}
	else {
		result = value;
	}
	return result;
}

function preparseOperatorName(operator){
	var result = operator;
	var operator=operator.toLowerCase();
	
	//Operators
	var DeutscheBahn = ['deutsche bahn', 'deutsche bahn ag', 'db', 'db ag', 'db bahn'];
	var DVB_to_fix = ['dvb ag', 'dvb', 'dresdner verkehrsbetriebe ag'];
	var DVB_right = ['dresdner verkehrsbetriebe'];

	if (DeutscheBahn.indexOf(operator)>-1) result = 'deutsche bahn';
	if (DVB_to_fix.indexOf(operator)>-1) result = 'DVB_to_fix';
	if (DVB_right.indexOf(operator)>-1) result = 'DVB_right';

	return result;
}

function getMarkerIcon(parsedOperator){
	var result = StdUnknown;
	if (parsedOperator == "<i><b>unbekannt</i></b>") result = StdIcon;
	if (parsedOperator == "deutsche bahn") result = DBicon;
	if (parsedOperator == "DVB_to_fix") result = DVBfixicon;
	if (parsedOperator == "DVB_right") result = DVBicon;

	return result;
}








