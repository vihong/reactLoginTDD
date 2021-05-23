import { render, screen } from '@testing-library/react'
import LoginForm from './molecules/LoginForm'

/**
 * ces test devraient être isolé donc faut rajouter des describe
 */

it('should have a username, a password field and a submit button', () => {
	// arrange
	render(<LoginForm />)
	//const tag = "username"

	// act
	const usernameField = screen.getByLabelText(/username/i)
	// const usernamePassword = screen.getByLabelText(/password/i)
	// const submitButton = screen.getByText(/submit/i)

	// assert (via la lib)
	expect(usernameField).toBeInTheDocument()
	// expect(usernamePassword).toBeInTheDocument()
	// expect(submitButton).toBeInTheDocument()
})
