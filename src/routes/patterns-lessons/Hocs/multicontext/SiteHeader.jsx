import { useTheme } from "./ThemeContext"
import { useAuth } from "./AuthContext"

export function SiteHeader() {
	const { theme, setTheme } = useTheme()
	const { user, setUser } = useAuth()

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	const login = () => {
		setUser({ name: "John Doe" })
	}

	return (
		<header>
			<p>Current theme: {theme}</p>
			<button onClick={toggleTheme}>Toggle Theme</button>

			{user ? (
				<p>Welcome, {user.name}</p>
			) : (
				<button onClick={login}>Login</button>
			)}
		</header>
	)
}
