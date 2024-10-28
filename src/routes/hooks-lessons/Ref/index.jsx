import { FormWithInputFocus } from "./FormWithInputFocus"

export default function Ref() {
	return (
		<div>
			Using React refs
			<FormWithInputFocus />
		</div>
	)
}

// function FormWithInputFocus() {
// 	const firstNameRef = useRef(null)
// 	function handleFormSubmit(event) {
// 		event.preventDefault()
// 		const form = event.target
// 		const formData = new FormData(form)
// 		const formObj = Object.fromEntries(formData.entries())
// 		console.log(formObj)
// 		// Clear the form & set focus
// 		form.reset()
// 		firstNameRef?.current?.focus()
// 	}

// 	return (
// 		<form className="space-y-2" onSubmit={handleFormSubmit}>
// 			<div>
// 				<label htmlFor="first-name">First Name:</label>
// 				<input
// 					type="text"
// 					id="first-name"
// 					name="first-name"
// 					ref={firstNameRef}
// 				/>
// 			</div>
// 			<div>
// 				<label htmlFor="last-name">Last Name:</label>
// 				<input type="text" id="last-name" name="last-name" />
// 			</div>
// 			<div>
// 				<label htmlFor="email">Email:</label>
// 				<input type="text" id="email" name="email" />
// 			</div>
// 			<div className="space-x-2">
// 				<button type="submit">Save</button>
// 				<button type="reset">cancel</button>
// 			</div>
// 		</form>
// 	)
// }
