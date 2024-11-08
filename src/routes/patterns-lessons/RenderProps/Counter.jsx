import { useState } from "react"

export function Counter(props) {
	const { children, initialCount = 0 } = props
	const [count, setCount] = useState(initialCount)

	if (typeof children !== "function") {
		throw new Error("Counter requires the children prop to be a function")
	}

	function increment() {
		setCount((c) => c + 1)
	}

	function decrement() {
		setCount((c) => c - 1)
	}

	return <>{children({ count, setCount, increment, decrement })}</>
}
