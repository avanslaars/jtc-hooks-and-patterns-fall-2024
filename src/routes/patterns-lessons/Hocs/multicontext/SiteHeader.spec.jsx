// import "@testing-library/jest-dom/vitest"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SiteHeader } from "./SiteHeader"

describe.skip("SiteHeader", () => {
	it("Renders without error", () => {
		render(<SiteHeader />)

		expect(screen.getByText(/current theme: light/i)).toBeInTheDocument()
	})

	it("Toggles the theme", async () => {
		const user = userEvent.setup()

		render(<SiteHeader />)

		expect(screen.getByText(/current theme: light/i)).toBeInTheDocument()

		await user.click(screen.getByText(/toggle theme/i))

		expect(screen.getByText(/current theme: dark/i)).toBeInTheDocument()
	})

	it("Logs in the user", async () => {
		const user = userEvent.setup()

		render(<SiteHeader />)

		const loginButton = screen.getByText(/login/i)

		expect(loginButton).toBeInTheDocument()

		await user.click(loginButton)

		expect(screen.getByText(/welcome, john doe/i)).toBeInTheDocument()

		expect(screen.queryByText(/login/i)).not.toBeInTheDocument()
	})
})
