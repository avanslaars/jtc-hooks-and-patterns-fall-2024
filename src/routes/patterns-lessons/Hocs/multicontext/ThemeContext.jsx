// ThemeContext.js
import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export function useTheme() {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider")
	}
	return context
}

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light")

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
