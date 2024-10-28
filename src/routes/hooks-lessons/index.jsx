import { Outlet } from "react-router-dom"
import { MainNavLink } from "@/components/MainNavLink"

export { default as HooksHome } from "./HooksHome"
export { default as SimpleState } from "./SimpleState"
export { default as ContextHook } from "./Context"
export { default as ComplexState } from "./ComplexState"
export { default as CustomHooks } from "./CustomHooks"
export { default as Effects } from "./Effects"
export { RulesOfHooks } from "./RulesOfHooks"
export { default as Ref } from "./Ref"

export default function HooksLessons() {
	return (
		<div className="mt-2">
			<h2 className="text-4xl text-teal-500">Hooks Lessons</h2>
			<nav className="py-3">
				<MainNavLink to="." end>
					Hooks Home
				</MainNavLink>
				<MainNavLink to="simple-state">Simple State</MainNavLink>
				<MainNavLink to="rules">Rules of Hooks</MainNavLink>
				<MainNavLink to="effects">Effects</MainNavLink>
				<MainNavLink to="complex-state">Complex State</MainNavLink>
				<MainNavLink to="context-hook">Context Hook</MainNavLink>
				<MainNavLink to="custom-hooks">Custom Hooks</MainNavLink>
				<MainNavLink to="ref-hook">References</MainNavLink>
			</nav>
			<main className="py-4">
				<Outlet />
			</main>
		</div>
	)
}
