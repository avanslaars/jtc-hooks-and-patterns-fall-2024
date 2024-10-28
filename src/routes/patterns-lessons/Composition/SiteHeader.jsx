import { Navigation } from "./Navigation"
import { Heading } from "./Heading"

export function SiteHeader() {
	return (
		<header className="mt-2 p-1 border-2 border-pink-400">
			<Heading title="My App" />
			<Navigation />
		</header>
	)
}
