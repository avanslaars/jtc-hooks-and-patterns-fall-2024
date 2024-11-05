import { useWeather } from "./useWeather"

export function WeatherFeelsLike(props) {
	const { location } = props
	// TODO: Replace placeholder values with real data
	// const weather = {
	// 	location: {
	// 		name: "Sample",
	// 	},
	// 	current: {
	// 		temp_f: 75,
	// 	},
	// }
	// const isLoading = false
	// const error = null
	const { weather, isLoading, error } = useWeather(location)
	if (isLoading) {
		return <p>Checking for your weather in {location}</p>
	}
	if (error) {
		return (
			<p>
				Something went wrong getting your weather. Maybe the weather took down
				our service?
			</p>
		)
	}

	const displayLocation = weather.location.name

	return (
		<div>
			{weather.current.temp_f > 75 ? (
				<p>The weather in {displayLocation} is hot!</p>
			) : weather.current.temp_f < 50 ? (
				<p>The weather in {displayLocation} is chilly.</p>
			) : (
				<p>Seems really nice in {displayLocation}</p>
			)}
		</div>
	)
}
