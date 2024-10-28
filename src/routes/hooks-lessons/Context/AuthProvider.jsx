import { useState } from "react"

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false) // Default to not logged in

	function login() {
		setIsAuthenticated(true)
	}

	function logout() {
		setIsAuthenticated(false)
	}

	return <div>{children}</div>
}
