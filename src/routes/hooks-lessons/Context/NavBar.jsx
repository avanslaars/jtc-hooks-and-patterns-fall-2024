import { useContext } from "react"
import { useAuth } from "./AuthProvider"

export function Navbar() {
	const { isAuthenticated, login, logout } = useAuth()

	function handleLogin() {
		login()
	}

	function handleLogout() {
		logout()
	}

	return (
		<div>
			<h3>Sample App</h3>
			<nav>
				Links go here...
				{isAuthenticated ? (
					<button onClick={handleLogout}>Logout</button>
				) : (
					<button onClick={handleLogin}>Login</button>
				)}
			</nav>
		</div>
	)
}
