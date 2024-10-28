import { useState } from "react"

export function RulesOfHooks() {
	return (
		<div className="px-2">
			<h3>Rules of Hooks</h3>
			<a
				href="https://react.dev/reference/rules/rules-of-hooks"
				className="text-xl text-teal-500 underline hover:text-amber-500"
			>
				Rules of Hooks
			</a>
			<ul>
				<li>
					Only call Hooks at the top level
					<ul>
						<li>Do not call Hooks inside conditions or loops</li>
						<li>Do not call Hooks after a conditional return statement</li>
						<li>Do not call Hooks in event handlers</li>
						<li>Do not call Hooks in class components</li>
						<li>
							Do not call Hooks inside functions passed to <code>useMemo</code>,{" "}
							<code>useReducer</code>, or <code>useEffect</code>
						</li>
						<li>Do not call Hooks inside conditions or loops</li>
					</ul>
				</li>
				<li>
					Only call Hooks from React functions
					<ul>
						<li>Call Hooks from React function components</li>
						<li>Call Hooks from custom hooks</li>
					</ul>
				</li>
			</ul>
		</div>
	)
}
