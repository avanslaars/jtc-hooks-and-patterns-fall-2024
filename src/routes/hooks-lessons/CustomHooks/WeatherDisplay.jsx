import { useState, useEffect } from "react"
import { useWeather } from "./useWeather"

export function WeatherDisplay(props) {
	const { location } = props

	const { weather, isLoading, error } = useWeather(location)

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error}</p>
	}

	return (
		<div>
			<h1>Weather in {weather.location.name}</h1>
			<p>
				Temperature: {weather.current.temp_f}°F ({weather.current.temp_c}°C)
			</p>
		</div>
	)
}
