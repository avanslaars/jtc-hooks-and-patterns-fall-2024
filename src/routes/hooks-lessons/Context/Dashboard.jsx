export function Dashboard() {
	const isAuthenticated = false

	return (
		<div>
			<h2>Dashboard</h2>
			{isAuthenticated ? (
				<p>Welcome back, user!</p>
			) : (
				<p>Please log in to see your dashboard.</p>
			)}
		</div>
	)
}
