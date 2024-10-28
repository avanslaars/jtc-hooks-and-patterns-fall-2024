export function Button(props) {
	const { isHovered, children } = props

	return (
		<button
			className={`p-2 font-bold border-2 rounded ${isHovered ? "border-amber-500 underline" : "border-teal-500"}`}
		>
			{children}
		</button>
	)
}
