import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
	Root,
	RootErrorElement,
	Home,
	HooksLessons,
	HooksHome,
	SimpleState,
	RulesOfHooks,
	Effects,
	ComplexState,
	ContextHook,
	Ref,
	CustomHooks,
	PatternsLessons,
	PatternsHome,
	Composition,
	CompoundComponents,
	RenderProps,
	HOCs,
} from "./routes"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <RootErrorElement />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "hooks",
				element: <HooksLessons />,
				children: [
					{
						index: true,
						element: <HooksHome />,
					},
					{
						path: "simple-state",
						element: <SimpleState />,
					},
					{
						path: "rules",
						element: <RulesOfHooks />,
					},
					{
						path: "effects",
						element: <Effects />,
					},
					{
						path: "complex-state",
						element: <ComplexState />,
					},
					{
						path: "context-hook",
						element: <ContextHook />,
					},
					{
						path: "ref-hook",
						element: <Ref />,
					},
					{
						path: "custom-hooks",
						element: <CustomHooks />,
					},
				],
			},
			{
				path: "patterns",
				element: <PatternsLessons />,
				children: [
					{
						index: true,
						element: <PatternsHome />,
					},
					{
						path: "composition",
						element: <Composition />,
					},
					{
						path: "compound-components",
						element: <CompoundComponents />,
					},
					{
						path: "render-props",
						element: <RenderProps />,
					},
					{
						path: "hocs",
						element: <HOCs />,
					},
				],
			},
		],
	},
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
