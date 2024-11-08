import { createContext, useState, useContext, useEffect } from "react"

const ModalContext = createContext()

export function useModal() {
	const context = useContext(ModalContext)

	useEffect(() => {
		function handleEscapeKey(event) {
			if (event.key === "Escape") {
				context.closeModal()
			}
		}
		document.addEventListener("keydown", handleEscapeKey)

		return () => document.removeEventListener("keydown", handleEscapeKey)
	}, [])

	if (!context) {
		throw new Error("useModal must be used within a Modal Provider")
	}

	return context
}

export function ModalProvider(props) {
	const { children } = props
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)

	const value = {
		isOpen,
		openModal,
		closeModal,
	}

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export function ModalTrigger(props) {
	const { children } = props
	const { openModal } = useModal()

	return <button onClick={openModal}>{children}</button>
}

export function Modal(props) {
	const { children } = props
	const { isOpen } = useModal()

	return isOpen ? (
		<OverlayDiv>
			<ModalDiv>{children}</ModalDiv>
		</OverlayDiv>
	) : null
}

export function ModalHeader(props) {
	const { title } = props
	const { closeModal } = useModal()

	return (
		<div className="text-slate-800 flex items-center">
			<h2 className="flex-1 font-bolder text-3xl">{title}</h2>
			<button onClick={closeModal}>Close</button>
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
