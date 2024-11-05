import React, { createContext, useState, useContext, useCallback } from "react"

// Create a context for the theme
const ThemeContext = createContext()

// Define theme objects
const themes = {
	light: {
		foreground: "#000000",
		background: "#eeeeee",
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222",
	},
}

// ThemeProvider component to wrap the app and provide theme context
function ThemeProvider({ children }) {
	// State to hold the current theme ('light' or 'dark')
	const [themeName, setThemeName] = useState("light")

	// Memoized function to toggle the theme
	const toggleTheme = useCallback(() => {
		setThemeName((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
	}, [])

	// Memoized theme value to avoid unnecessary re-renders
	const theme = React.useMemo(
		() => ({
			themeName,
			theme: themes[themeName],
			toggleTheme,
		}),
		[themeName, toggleTheme],
	)
	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme
function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider")
	}
	return context
}

// ThemeSwitcher component that uses the custom useTheme hook
function ThemeSwitcher() {
	const { themeName, theme, toggleTheme } = useTheme()

	return (
		<div
			style={{
				color: theme.foreground,
				backgroundColor: theme.background,
				padding: "20px",
				minHeight: "100vh",
			}}
		>
			<h1>Current Theme: {themeName}</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	)
}

// Main App component
function App() {
	return (
		<ThemeProvider>
			<ThemeSwitcher />
		</ThemeProvider>
	)
}

export default App
