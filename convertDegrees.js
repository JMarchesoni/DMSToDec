/* Formulae for conversion
 * DMS to Dec: Dec = Degrees + minutes/60 + seconds/3600 */

/* Broken, fix later
function DecToDMS(decDegrees)
{
	var degrees, minutes, seconds, hemisphere;
	var coordValue;

	degrees = decDegrees.split('.');
	minutes = ("0." + degrees[1]) * 60;
	minutes = minutes.toString().split('.')[0];
	seconds = ("0." + minutes[1]) * 60;
	seconds = Math.round(seconds);

	coordValue = degrees + '&deg;' + minutes + "'" + seconds '"';
	return coordValue;
}
*/

function DMSToDec(dmsDegrees)
{
	var degrees, minutes, seconds;
	var coordValue;

	var regExp = new RegExp(/[^0-9NSEW.]/gi);
	var values = dmsDegrees.trim().replace(regExp, ',')
	values = values.split(',');
	if (values.length === 4)
	{
		degrees = parseInt(values[0]);
		minutes = values[1] / 60;
		seconds = values[2] / 3600;

		coordValue = degrees + minutes + seconds;

		// Make negative if hemisphere is South or West
		switch(values[3])
		{
			case 'S':
			case 'W':
				coordValue = 0 - coordValue;
		}
	}

	return coordValue;
}
