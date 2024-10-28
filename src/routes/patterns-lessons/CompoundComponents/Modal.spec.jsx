import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
	Modal,
	ModalTrigger,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalProvider,
} from "./Modal"

describe.skip("Modal", () => {
	it("shows the modal when the trigger is clicked", async () => {
		const user = userEvent.setup()

		render(
			<ModalProvider>
				<ModalTrigger>Click Me</ModalTrigger>
				<Modal>
					<ModalBody>Modal test</ModalBody>
				</Modal>
			</ModalProvider>,
		)

		const button = screen.getByText(/click me/i)

		expect(button).toBeInTheDocument()

		expect(screen.queryByText(/modal test/i)).not.toBeInTheDocument()

		await user.click(button)

		expect(screen.getByText(/modal test/i)).toBeInTheDocument()
	})

	it("Hides the modal for escape key", async () => {
		const user = userEvent.setup()

		render(
			<ModalProvider>
				<ModalTrigger>Click Me</ModalTrigger>
				<Modal>
					<ModalBody>Modal test</ModalBody>
				</Modal>
			</ModalProvider>,
		)

		await user.click(screen.getByText(/click me/i))

		expect(screen.getByText(/modal test/i)).toBeInTheDocument()

		await user.keyboard("{Escape}")

		expect(screen.queryByText(/modal test/i)).not.toBeInTheDocument()
	})

	it("Hides the modal for close key", async () => {
		const user = userEvent.setup()

		render(
			<ModalProvider>
				<ModalTrigger>Click Me</ModalTrigger>
				<Modal>
					<ModalHeader title="Sample modal" />
					<ModalBody>Modal test</ModalBody>
				</Modal>
			</ModalProvider>,
		)

		await user.click(screen.getByText(/click me/i))

		expect(screen.getByText(/modal test/i)).toBeInTheDocument()

		await user.click(screen.getByText(/close/i))

		expect(screen.queryByText(/modal test/i)).not.toBeInTheDocument()
	})
})
