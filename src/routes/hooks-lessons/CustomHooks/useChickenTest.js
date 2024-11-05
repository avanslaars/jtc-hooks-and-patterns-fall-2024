import { useEffect } from "react"

export function useChickenTest() {
	useEffect(() => {
		const handleBeforeUnload = (event) => {
			event.preventDefault()
			event.returnValue = window.confirm()
		}

		window.addEventListener("beforeunload", handleBeforeUnload)

		return () => window.removeEventListener("beforeunload", handleBeforeUnload)
	}, [])
}
