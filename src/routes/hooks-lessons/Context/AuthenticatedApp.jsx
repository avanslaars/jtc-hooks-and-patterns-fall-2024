import { AuthProvider } from "./AuthProvider"
import { Navbar } from "./NavBar"
import { Dashboard } from "./Dashboard"
import { UnrelatedContent } from "./UnrelatedContent"
import { useChickenTest } from "../CustomHooks/useChickenTest"

export function AuthenticatedApp() {
	useChickenTest()
	return (
		<>
			<AuthProvider>
				<h1>Hello</h1>
				<div>
					<Navbar />
					<UnrelatedContent />
					<Dashboard />
				</div>
			</AuthProvider>
		</>
	)
}
