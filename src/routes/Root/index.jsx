import {
	Link,
	NavLink,
	Outlet,
	useRouteError,
	isRouteErrorResponse,
} from "react-router-dom"

export function ErrorElement() {
	const error = useRouteError()
	console.error(error)

	return (
		<div className="text-gray-100">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			{isRouteErrorResponse(error) ? (
				<>
					<p>
						<i>{error.statusText}</i>
					</p>

					{error.data?.message ? <p>{error.data.message}</p> : null}
				</>
			) : null}
		</div>
	)
}

function MainNavLink(props) {
	const { to, children } = props
	return (
		<NavLink
			to={to}
			className={({ isActive, isPending }) =>
				`text-amber-400 hover:underline hover:text-teal-400 ml-2 first:ml-0 border border-teal-200 hover:border-amber-200 rounded px-2 py-1 ${
					isActive ? "!text-teal-400 underline border-amber-300" : null
				}`
			}
		>
			{children}
		</NavLink>
	)
}

export default function Root() {
	return (
		<div className="container mx-auto grid grid-rows-3 min-h-screen bg-gray-800 text-gray-50">
			<header className="border-b-2 border-amber-300">
				<Link
					to="/"
					className="no-underline text-5xl ml-2 flex space-x-3 py-1 align-items-middle"
				>
					<span role="img" aria-label="home">
						🏡
					</span>
					<h1 className="text-5xl font-bold text-amber-500">
						React Hooks and Patterns
					</h1>
				</Link>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>Standard fine print and a year type stuff goes here</footer>
		</div>
	)
}
