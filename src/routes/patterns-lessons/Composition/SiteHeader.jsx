export function SiteHeader(props) {
	const { children } = props
	return (
		<header className="mt-2 p-1 border-2 border-pink-400">{children}</header>
	)
}
