import { createContext, useContext, useState, useEffect } from "react"
import { WeatherDisplay } from "./WeatherDisplay"

export default function CustomHooks() {
	return (
		<div>
			Custom Hooks
			<WeatherDisplay location="ny" />
		</div>
	)
}
