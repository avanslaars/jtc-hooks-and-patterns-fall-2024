import { useEffect, useState } from "react"

const createRandomNumber = () => Math.floor(Math.random() * 100)

export function LoggingStateUpdates() {
	const [rando, setRando] = useState(createRandomNumber)

	useEffect(() => {
		console.log("A new random number was generated", rando)

		return () => console.log("Cleaning up")
	}, [rando])

	function handleRandomClick() {
		setRando(createRandomNumber)
	}

	return (
		<div>
			This component logs to the console when state is updated
			<div>
				<button type="button" onClick={handleRandomClick}>
					Generate a random number
				</button>
				<div>Random Number: {rando}</div>
			</div>
		</div>
	)
}
