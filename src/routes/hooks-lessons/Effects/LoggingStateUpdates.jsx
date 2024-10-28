import { useEffect, useState } from "react"

const createRandomNumber = () => Math.floor(Math.random() * 100)

export function LoggingStateUpdates() {
	const [rando, setRando] = useState(createRandomNumber)

	useEffect(() => {
		// TODO
	}, [])

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
