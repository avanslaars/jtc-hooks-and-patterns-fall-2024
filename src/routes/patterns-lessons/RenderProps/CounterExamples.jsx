import { Counter } from "./Counter"

const data = ["One", "Two", "Three", "Four"]

export function CounterExamples() {
	return (
		<div>
			<h3>Counter examples</h3>
			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Just the Count</h4>
				<Counter>{({ count }) => <div>default count: {count}</div>}</Counter>
				<Counter initialCount={7}>
					{({ count }) => <div>initial count from props: {count}</div>}
				</Counter>
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Typical Counter Stuff</h4>
				<Counter>
					{({ count, increment, decrement }) => (
						<div>
							<div>{count}</div>
							<button type="button" onClick={increment}>
								+1
							</button>
							<button type="button" onClick={decrement}>
								-1
							</button>
						</div>
					)}
				</Counter>
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Driving a Multi Step Process</h4>
				<Counter>
					{({ count, increment, setCount }) => (
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
					)}
				</Counter>
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Move Stuff</h4>
				<Counter>
					{({ count, increment, setCount }) => (
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
					)}
				</Counter>
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Move Stuff Another Way</h4>
				<Counter>
					{({ count, increment, setCount }) => (
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
					)}
				</Counter>
			</div>

			<div className="mt-2 border border-teal-400 rounded p-2">
				<h4>Cycle Through an Array of Values</h4>
				{/* https://vanslaars.io/articles/cycle-through-an-array-of-values-with-the-modulus-operator */}
				<Counter>
					{({ count, setCount }) => (
						<div>
							<div>{data[count]}</div>
							<button
								type="button"
								onClick={() =>
									setCount((c) => (c - 1 + data.length) % data.length)
								}
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
					)}
				</Counter>
			</div>
		</div>
	)
}
