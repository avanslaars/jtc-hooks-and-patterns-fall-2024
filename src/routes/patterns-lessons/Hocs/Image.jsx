export function Image(props) {
	const { isHovered, src, alt } = props

	return (
		<img
			src={src}
			alt={alt}
			className={`transition-opacity duration-300 ease-in-out inline-block ${isHovered ? "opacity-50" : "opacity-100"}`}
			width={200}
		/>
	)
}
