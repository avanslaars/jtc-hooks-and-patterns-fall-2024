import { useState } from "react"

export function useCounter(initialCount = 0) {
	const [count, setCount] = useState(initialCount)

	function increment() {
		setCount((c) => c + 1)
	}

	function decrement() {
		setCount((c) => c - 1)
	}

	return { count, setCount, increment, decrement }
}
