/* Formulae for conversion
 * DMS to Dec: Dec = Degrees + minutes/60 + seconds/3600 */

function DecToDMS(decDegrees)
{
	degrees = decDegrees.split('.');

	minutes = ("0." + degrees[1]) * 60;
	seconds = ("0." + minutes[1]) * 60;
	minutes = minutes.toString().spit('.')[0];
	seconds = Math.round(seconds);

	coordValue = degrees + "&deg;" + minutes + "'" + seconds '"' /* + hemisphere */;
}

function DMSToDec(dmsDegrees)
{

}
