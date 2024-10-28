export function ModalProvider(props) {
	const { children } = props

	return <>{children}</>
}

export function ModalTrigger(props) {
	const { children } = props

	return <button>{children}</button>
}

export function Modal(props) {
	const { children } = props

	const isOpen = false
	return isOpen ? (
		<OverlayDiv>
			<ModalDiv>{children}</ModalDiv>
		</OverlayDiv>
	) : null
}

export function ModalHeader(props) {
	const { title } = props

	return (
		<div className="text-slate-800 flex items-center">
			<h2 className="flex-1 font-bolder text-3xl">{title}</h2>
			<button>Close</button>
		</div>
	)
}

export function ModalBody(props) {
	const { children } = props
	return <div className="text-slate-900">{children}</div>
}

export function ModalFooter(props) {
	const { children } = props
	return <div className="text-slate-900 justify-self-end">{children}</div>
}

function OverlayDiv(props) {
	const { children } = props
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-start pt-36 justify-center z-50">
			{children}
		</div>
	)
}

function ModalDiv(props) {
	const { children } = props
	return (
		<div className="bg-white p-2 rounded-lg shadow-lg max-w-lg w-full flex flex-col">
			{children}
		</div>
	)
}
