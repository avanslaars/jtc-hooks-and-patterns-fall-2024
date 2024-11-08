import { Button } from "./Button"
import { Image } from "./Image"
import { withHover } from "./withHover"

// const HoverButton = withHover(Button)
// const HoverImage = withHover(Image)

export function WithHoverExample() {
	return (
		<div className="flex flex-col space-y-4">
			<div>
				<Button>Hover over me</Button>
			</div>
			<div>
				<Image src="https://placehold.co/200x100" alt="placeholder image" />
			</div>
		</div>
	)
}
