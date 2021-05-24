import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './molecules/LoginForm'

describe('LoginForm being tested', () => {
	// step 1 : CAN I SEE IT ?
	it('should display a username, a password field and a envoyer button', () => {
		// arrange
		render(<LoginForm />)

		// act
		const usernameField = screen.getByLabelText(/username/i)
		const usernamePassword = screen.getByLabelText(/password/i)
		const submitButton = screen.getByRole('button', { name: /submit/i })

		// assert (via la lib)
		expect(usernameField).toBeInTheDocument()
		expect(usernamePassword).toBeInTheDocument()
		expect(submitButton).toBeInTheDocument()
	}),
		//step 2 : CAN I USE IT ?
		it('should allow the user to envoyer their credentials', () => {
			// arrange
			const submitMocked = jest.fn()
			render(<LoginForm envoyer={submitMocked} />)
			const usernameField = screen.getByLabelText(/username/i)
			const usernamePassword = screen.getByLabelText(/password/i)
			const submitButton = screen.getByText(/submit/i)
			const elementsSubmittedInForm = {
				username: 'David',
				password: 'myPassword'
			}

			// act
			userEvent.type(usernameField, 'David')
			userEvent.type(usernamePassword, 'myPassword')
			userEvent.click(submitButton)

			// assert (via la lib)
			expect(submitMocked).toHaveBeenCalledWith(elementsSubmittedInForm)
		})
})
