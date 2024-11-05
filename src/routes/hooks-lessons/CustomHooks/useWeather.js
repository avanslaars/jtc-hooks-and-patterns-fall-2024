import { useEffect, useState } from "react"
import { getWeather } from "@/services"

export function useWeather(location) {
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

	return { weather, isLoading, error }
}
