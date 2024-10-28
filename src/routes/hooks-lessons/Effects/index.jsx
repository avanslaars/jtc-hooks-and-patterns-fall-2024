import { useState, useEffect } from "react"
import { DeckOfCards } from "./DeckOfCards"
import { LoggingStateUpdates } from "./LoggingStateUpdates"
import { WindowCloseWarning } from "./WindowCloseWarning"

export default function Effects() {
	return (
		<div>
			<DeckOfCards />
			<hr />
			<LoggingStateUpdates />
			<hr />
			<WindowCloseWarning />
		</div>
	)
}
