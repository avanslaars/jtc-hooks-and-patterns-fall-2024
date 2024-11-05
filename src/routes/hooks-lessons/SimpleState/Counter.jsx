import { useState } from "react"

export function Counter() {
	const [count, setCount] = useState(10)

	function handleIncrement() {
		setCount((c) => c + 1)
	}

	function handleDecrement() {
		setCount((c) => c - 1)
	}

	function handleMakeItFortyTwo() {
		setCount(42)
	}
	return (
		<div>
			<span>count {count}</span>
			<div className="space-x-2">
				<button type="button" onClick={handleIncrement}>
					+
				</button>
				<button type="button" onClick={handleDecrement}>
					-
				</button>
				<button type="button" onClick={handleMakeItFortyTwo}>
					Make it 42
				</button>
			</div>
		</div>
	)
}
