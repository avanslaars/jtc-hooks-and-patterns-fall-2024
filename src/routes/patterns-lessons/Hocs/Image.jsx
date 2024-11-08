import { useHover } from "./useHover"

export function Image(props) {
	// const { isHovered, src, alt } = props
	const { src, alt } = props

	const { isHovered, handleMouseEnter, handleMouseLeave } = useHover()

	return (
		<img
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			src={src}
			alt={alt}
			className={`transition-opacity duration-300 ease-in-out inline-block ${isHovered ? "opacity-50" : "opacity-100"}`}
			width={200}
		/>
	)
}
