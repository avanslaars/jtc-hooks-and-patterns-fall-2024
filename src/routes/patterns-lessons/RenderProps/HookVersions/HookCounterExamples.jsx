import { useCounter } from "./useCounter"

export function HookCounterExamples() {
	return (
		<div>
			<h3>Counter Hook examples</h3>
			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Just the Count</h4>
				<DefaultCount />
				<CountWithInitialValue />
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Typical Counter Stuff</h4>
				<StandardCounter />
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Driving a Multi Step Process</h4>
				<MultiStepCounter />
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Move Stuff</h4>
				<MoveStuffCounter />
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Move Stuff Another Way</h4>
				<SpinStuffCounter />
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Cycle Through an Array of Values</h4>
				{/* https://vanslaars.io/articles/cycle-through-an-array-of-values-with-the-modulus-operator */}
				<CycleArray />
			</div>
		</div>
	)
}

const data = ["One", "Two", "Three", "Four"]

function CycleArray() {
	const { count, setCount } = useCounter()
	return (
		<div>
			<div>{data[count]}</div>
			<button
				type="button"
				onClick={() => setCount((c) => (c - 1 + data.length) % data.length)}
			>
				Previous
			</button>
			<button
				type="button"
				onClick={() => setCount((c) => (c + 1) % data.length)}
			>
				Next
			</button>
		</div>
	)
}

function SpinStuffCounter() {
	const { count, increment, setCount } = useCounter()
	return (
		<div>
			<div
				className="w-14 h-14 bg-blue-500 transition-all ease-linear"
				style={{ transform: `rotate(${count * 0.1}turn)` }}
			></div>
			<button type="button" onClick={increment}>
				+1
			</button>
			<button type="button" onClick={() => setCount(0)}>
				reset
			</button>
		</div>
	)
}

function MoveStuffCounter() {
	const { count, increment, setCount } = useCounter()
	return (
		<div>
			<div
				className="w-14 h-14 bg-blue-500 transition-all ease-linear"
				style={{ transform: `translateX(${count * 20}px)` }}
			></div>
			<button type="button" onClick={increment}>
				+1
			</button>
			<button type="button" onClick={() => setCount(0)}>
				reset
			</button>
		</div>
	)
}

function MultiStepCounter() {
	const { count, increment, setCount } = useCounter()
	return (
		<div>
			{count === 0 ? (
				<div>
					<p>Step 1: Enter your name</p>
					<button onClick={increment}>Next</button>
				</div>
			) : null}
			{count === 1 ? (
				<div>
					<p>Step 2: Enter your email</p>
					<button onClick={increment}>Next</button>
				</div>
			) : null}
			{count === 2 ? (
				<div>
					<p>Step 3: Confirm your information</p>
					<button onClick={increment}>Submit</button>
				</div>
			) : null}
			{count > 2 ? (
				<div>
					<p>All Done!</p>
					<button onClick={() => setCount(0)}>Do it again</button>
				</div>
			) : null}
		</div>
	)
}

function StandardCounter() {
	const { count, increment, decrement } = useCounter()
	return (
		<div>
			<div>{count}</div>
			<button type="button" onClick={increment}>
				+1
			</button>
			<button type="button" onClick={decrement}>
				-1
			</button>
		</div>
	)
}

function CountWithInitialValue() {
	const { count } = useCounter(7)
	return <div>initial count from props: {count}</div>
}

function DefaultCount() {
	const { count } = useCounter()
	return <div>default count: {count}</div>
}
