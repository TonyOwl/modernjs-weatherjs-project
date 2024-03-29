// Init storage object
const storage = new Storage();

const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init ui object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change').addEventListener('click', e => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;
	weather.changeLocation(city, state);

	// Set location in LS
	storage.setLocationData(city, state);

	// Get and display weather
	getWeather();

	// Close modal
	$('#locModal').modal('hide');
});

function getWeather() {
	weather
		.getWeather()
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err));
}
