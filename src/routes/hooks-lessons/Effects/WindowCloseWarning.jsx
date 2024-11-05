import { useEffect } from "react"

export function WindowCloseWarning() {
	useEffect(() => {
		const handleBeforeUnload = (event) => {
			event.preventDefault()
			event.returnValue = window.confirm()
		}

		window.addEventListener("beforeunload", handleBeforeUnload)

		return () => window.removeEventListener("beforeunload", handleBeforeUnload)
	}, [])

	useEffect(() => {
		// HTTP Call
	}, [])

	useEffect(() => {
		// Logging for debugging
	}, [])

	return <div>Asks you to confirm window close</div>
}
