import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div className="flex space-x-4 p-3">
			<div className="border-2 border-amber-500 rounded-lg p-6 flex-1">
				<Link to="hooks">
					<h2 className="text-3xl text-teal-500 underline">React Hooks</h2>
					<p className="text-md text-slate-100 no-underline">
						Examples of using the most common hooks in React. Manage state,
						execute side-effects, interact with the DOM, and use the Context
						API.
					</p>
				</Link>
			</div>
			<div className="border-2 border-amber-500 rounded-lg p-6 flex-1">
				<Link to="patterns">
					<h2 className="text-3xl text-teal-500 underline">React Patterns</h2>
					<p className="text-md text-slate-100 no-underline">
						Learn React patterns. Keep your code clean and flexible with
						composition, build compound components, enhance existing components
						with higher order components and give UI control back to the
						consumer with render props.
					</p>
				</Link>
			</div>
		</div>
	)
}
