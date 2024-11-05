import { createContext, useState, useContext } from "react"

const AuthContext = createContext()

export function useAuth() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error("useAuth must be used within an auth provider")
	}
	return context
}

export const AuthProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false) // Default to not logged in

	function login() {
		setIsAuthenticated(true)
	}

	function logout() {
		setIsAuthenticated(false)
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{props.children}
		</AuthContext.Provider>
	)
}
