import React, { useState, useEffect } from "react"

function GitHubForm() {
	// State to hold the input value (GitHub username)
	const [username, setUsername] = useState("")

	// State to hold the list of repositories
	const [repositories, setRepositories] = useState([])

	// State to manage loading status
	const [isLoading, setIsLoading] = useState(false)

	// State to handle any errors that occur during fetching
	const [error, setError] = useState(null)

	// useEffect hook to fetch repositories when username changes
	useEffect(() => {
		// Function to fetch repositories
		const fetchRepositories = async () => {
			// Don't fetch if username is empty
			if (!username) {
				setRepositories([])
				return
			}

			// Set loading to true before fetching
			setIsLoading(true)
			// Reset any previous errors
			setError(null)

			try {
				// Fetch data from GitHub API
				const response = await fetch(
					`https://api.github.com/users/${username}/repos`,
				)
				// If response is not ok, throw an error
				if (!response.ok) {
					throw new Error("Failed to fetch repositories")
				}

				// Parse the JSON response
				const data = await response.json()

				// Update the repositories state with fetched data
				setRepositories(data)
			} catch (error) {
				// If an error occurs, set the error state
				setError(error.message)
				// Clear the repositories
				setRepositories([])
			} finally {
				// Set loading to false after fetching (whether successful or not)
				setIsLoading(false)
			}
		}

		// Call the fetchRepositories function
		fetchRepositories()
	}, [username]) // This effect runs when username changes

	// Handler for input changes
	const handleInputChange = (event) => {
		// Update the username state with the new input value
		setUsername(event.target.value)
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Enter GitHub username"
				value={username} // Controlled input: value is set by state
				onChange={handleInputChange} // Call handler on input change
			/>

			{/* Display loading message when fetching */}
			{isLoading && <p>Loading repositories...</p>}

			{/* Display error message if an error occurred */}
			{error && <p>Error: {error}</p>}

			{/* Display repositories if available and not loading */}
			{!isLoading && !error && repositories.length > 0 && (
				<ul>
					{repositories.map((repo) => (
						<li key={repo.id}>{repo.name}</li>
					))}
				</ul>
			)}

			{/* Display message if no repositories found */}
			{!isLoading && !error && username && repositories.length === 0 && (
				<p>No repositories found for this user.</p>
			)}
		</div>
	)
}

export default GitHubForm
