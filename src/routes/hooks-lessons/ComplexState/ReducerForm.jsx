import { useState } from "react"

export function ReducerForm() {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")

	function handleFirstNameChange(event) {
		setFirstName(event.target.value)
	}

	function handleLastNameChange(event) {
		setLastName(event.target.value)
	}

	function handleFormSubmit(event) {
		event.preventDefault()
		console.log({ firstName, lastName })
		// Clear form after submit
		setFirstName("")
		setLastName("")
	}

	function handleFormReset(event) {
		event.preventDefault()
		setFirstName("")
		setLastName("")
	}

	return (
		<div>
			<form onSubmit={handleFormSubmit} onReset={handleFormReset}>
				<div className="py-1">
					<label htmlFor="firstName">First Name: </label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={firstName}
						onChange={handleFirstNameChange}
					/>
				</div>
				<div className="py-1">
					<label htmlFor="lastName">Last Name: </label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={lastName}
						onChange={handleLastNameChange}
					/>
				</div>
				<div>
					<button type="submit">Save</button>
					<button type="reset">Cancel</button>
				</div>
			</form>
		</div>
	)
}
