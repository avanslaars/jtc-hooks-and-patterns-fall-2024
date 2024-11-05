import { createContext, useContext, useState, useEffect } from "react"
import { WeatherDisplay } from "./WeatherDisplay"
import { WeatherFeelsLike } from "./WeatherFeelsLike"

export default function CustomHooks() {
	return (
		<div>
			Custom Hooks
			<WeatherDisplay location="ny" />
			<WeatherFeelsLike location="ny" />
		</div>
	)
}
