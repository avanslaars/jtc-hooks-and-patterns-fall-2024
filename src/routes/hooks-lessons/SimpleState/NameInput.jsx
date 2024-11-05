import { useState } from "react"

export function NameInput() {
	const [name, setName] = useState("Andy")

	const handleNameChange = (evt) => setName(event.target.value)

	function handleSubmit(event) {
		event.preventDefault()
		console.log("Submitting a form")
	}

	return (
		<div>
			<span>Entered Name: {name}</span>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Enter a name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={handleNameChange}
				/>
				<button type="submit">Save</button>
			</form>
		</div>
	)
}
