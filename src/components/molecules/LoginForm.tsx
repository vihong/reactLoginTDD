import React from 'react'

export default function LoginForm() {
	return (
		<form>
			<h1>Please log in</h1>

			<label htmlFor="username">Username:</label>
			<input id="username" />

			<label htmlFor="password">Password:</label>
			<input id="password" />
			<button type="submit">Submit</button>
		</form>
	)
}
