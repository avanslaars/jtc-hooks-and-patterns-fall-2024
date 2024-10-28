import { AuthProvider } from "./AuthProvider"
import { Navbar } from "./NavBar"
import { Dashboard } from "./Dashboard"
import { UnrelatedContent } from "./UnrelatedContent"

export function AuthenticatedApp() {
	return (
		<AuthProvider>
			<div>
				<Navbar />
				<UnrelatedContent />
				<Dashboard />
			</div>
		</AuthProvider>
	)
}
