import { NavLink } from "react-router-dom"

export function MainNavLink(props) {
	const { to, children, ...rest } = props
	return (
		<NavLink
			to={to}
			className={({ isActive, isPending }) =>
				`text-amber-400 hover:underline hover:text-teal-400 ml-2 first:ml-0 border border-teal-200 hover:border-amber-200 rounded px-2 py-1 ${
					isActive ? "!text-teal-400 underline border-amber-300" : null
				}`
			}
			{...rest}
		>
			{children}
		</NavLink>
	)
}
