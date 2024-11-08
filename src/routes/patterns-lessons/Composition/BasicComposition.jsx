import { Heading } from "./Heading"
import { Navigation } from "./Navigation"
import { SiteHeader } from "./SiteHeader"

export default function BasicComposition() {
	return (
		<>
			<SiteHeader>
				<Navigation />
				<Heading>
					<span role="img" aria-label="smile">
						😅
					</span>{" "}
					New Heading
				</Heading>
			</SiteHeader>
		</>
	)
}
