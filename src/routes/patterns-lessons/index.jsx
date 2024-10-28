import { Outlet } from "react-router-dom"
import { MainNavLink } from "@/components/MainNavLink"

export { default as PatternsHome } from "./PatternsHome"
export { default as Composition } from "./Composition"
export { default as CompoundComponents } from "./CompoundComponents"
export { default as HOCs } from "./Hocs"
export { default as RenderProps } from "./RenderProps"

export default function PatternsLessons() {
	return (
		<div>
			<h2>React Patterns</h2>
			<nav>
				<MainNavLink to="." end>
					Patterns Home
				</MainNavLink>
				<MainNavLink to="composition">Composition</MainNavLink>
				<MainNavLink to="compound-components">Compound Components</MainNavLink>
				<MainNavLink to="hocs">Higher Order Components</MainNavLink>
				<MainNavLink to="render-props">Render Props</MainNavLink>
			</nav>
			<main className="py-4">
				<Outlet />
			</main>
		</div>
	)
}
