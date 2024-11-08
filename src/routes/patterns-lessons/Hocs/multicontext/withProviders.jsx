import { AuthProvider } from "./AuthContext"
import { ThemeProvider } from "./ThemeContext"

export function withProviders(WrappedComponent) {
	return function WithProviders(props) {
		return (
			<ThemeProvider>
				<AuthProvider>
					<WrappedComponent {...props} />
				</AuthProvider>
			</ThemeProvider>
		)
	}
}
