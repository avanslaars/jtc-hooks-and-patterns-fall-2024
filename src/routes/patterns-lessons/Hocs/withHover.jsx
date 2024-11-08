import { useState } from "react"

export function withHover(WrappedComponent) {
	return function WithHoverComponent(props) {
		const [isHovered, setIsHovered] = useState(false)

		function handleMouseEnter() {
			setIsHovered(true)
		}

		function handleMouseLeave() {
			setIsHovered(false)
		}

		return (
			<span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<WrappedComponent {...props} isHovered={isHovered} />
			</span>
		)
	}
}
