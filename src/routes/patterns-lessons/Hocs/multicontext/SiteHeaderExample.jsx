import { AuthProvider } from "./AuthContext"
import { SiteHeader } from "./SiteHeader"
import { ThemeProvider } from "./ThemeContext"

export function SiteHeaderExample() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<SiteHeader />
			</AuthProvider>
		</ThemeProvider>
	)
}
