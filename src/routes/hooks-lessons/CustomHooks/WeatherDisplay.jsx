import { useState, useEffect } from "react"
import { getWeather } from "@/services"

export function WeatherDisplay(props) {
	const { location } = props
	const [weather, setWeather] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				setIsLoading(true)
				const data = await getWeather(location)
				setWeather(data)
			} catch (err) {
				setError(err.message)
			} finally {
				setIsLoading(false)
			}
		}

		fetchWeather()
	}, [location])

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
