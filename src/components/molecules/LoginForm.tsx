import React from 'react'

export default function LoginForm() {
	return (
		<div>
			<h1>LoginForm</h1>
			<label htmlFor="username">Username:</label>
			<input id="username" />

			<label htmlFor="password">Password:</label>
			<input id="password" />
			<button>Submit</button>
		</div>
	)
}
