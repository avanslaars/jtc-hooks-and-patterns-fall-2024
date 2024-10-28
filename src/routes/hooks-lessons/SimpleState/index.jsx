import { useState } from "react"
import { NameInput } from "./NameInput"
import { Counter } from "./Counter"

export default function SimpleState() {
	return (
		<div>
			<NameInput />
			<hr />
			<Counter />
		</div>
	)
}
