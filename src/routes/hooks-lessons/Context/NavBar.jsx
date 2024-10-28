export function Navbar() {
	const isAuthenticated = false

	function handleLogin() {
		// TODO
	}

	function handleLogout() {
		// TODO
	}

	return (
		<div>
			<h3>Sample App</h3>
			<nav>
				Links go here...
				{isAuthenticated ? (
					<button onClick={handleLogout}>Logout</button>
				) : (
					<button onClick={handleLogin}>Login</button>
				)}
			</nav>
		</div>
	)
}
