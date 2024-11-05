import { useState, useReducer } from "react"

const initialState = {
	firstName: "",
	lastName: "",
}

function formReducer(state, action) {
	switch (action.type) {
		case "UPDATE_FIRST_NAME":
			return { ...state, firstName: action.payload }
		case "UPDATE_LAST_NAME":
			return { ...state, lastName: action.payload }
		case "RESET_FORM":
			return initialState
		default:
			return state
	}
}

export function ReducerForm() {
	// const [firstName, setFirstName] = useState("")
	// const [lastName, setLastName] = useState("")

	const [state, dispatch] = useReducer(formReducer, initialState)

	const { firstName, lastName } = state

	function handleFirstNameChange(event) {
		// setFirstName(event.target.value)
		dispatch({ type: "UPDATE_FIRST_NAME", payload: event.target.value })
	}

	function handleLastNameChange(event) {
		// setLastName(event.target.value)
		dispatch({ type: "UPDATE_LAST_NAME", payload: event.target.value })
	}

	function handleFormSubmit(event) {
		event.preventDefault()
		console.log({ firstName, lastName })
		// Clear form after submit
		// setFirstName("")
		// setLastName("")
		dispatch({ type: "RESET_FORM" })
	}

	function handleFormReset(event) {
		event.preventDefault()
		dispatch({ type: "RESET_FORM" })
		// setFirstName("")
		// setLastName("")
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
