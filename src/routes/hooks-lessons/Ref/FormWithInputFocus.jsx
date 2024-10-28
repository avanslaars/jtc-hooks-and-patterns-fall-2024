export function FormWithInputFocus() {
	function handleFormSubmit(event) {
		event.preventDefault()
		const form = event.target
		const formData = new FormData(form)
		const formObj = Object.fromEntries(formData.entries())
		console.log(formObj)
		// Clear the form
		form.reset()
		// TODO: set focus on first name
	}

	return (
		<form className="space-y-2" onSubmit={handleFormSubmit}>
			<div>
				<label className="block" htmlFor="first-name">
					First Name:
				</label>
				<input type="text" id="first-name" name="first-name" />
			</div>
			<div>
				<label className="block" htmlFor="last-name">
					Last Name:
				</label>
				<input type="text" id="last-name" name="last-name" />
			</div>
			<div>
				<label className="block" htmlFor="email">
					Email:
				</label>
				<input type="text" id="email" name="email" />
			</div>
			<div className="space-x-2">
				<button type="submit">Save</button>
				<button type="reset">cancel</button>
			</div>
		</form>
	)
}
