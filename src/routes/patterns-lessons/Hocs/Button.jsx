import { useHover } from "./useHover"

export function Button(props) {
	// const { isHovered, children } = props
	const { children } = props
	const { isHovered, handleMouseEnter, handleMouseLeave } = useHover()

	return (
		<button
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`p-2 font-bold border-2 rounded ${isHovered ? "border-amber-500 underline" : "border-teal-500"}`}
		>
			{children}
		</button>
	)
}
