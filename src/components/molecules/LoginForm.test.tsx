import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LoginForm from "./LoginForm"

it("should allow the user to submit their login and password details", () => {
  //arrange
  const submitMocked = jest.fn()
  const credentials = {
    username: "David",
    password: "myPassword",
  }
  render(<LoginForm submit={submitMocked} />)
  const username = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole("button", { name: /submit/i })

  //act
  userEvent.type(username, "David")
  userEvent.type(password, "myPassword")
  userEvent.click(submitButton)

  //assert
  expect(submitMocked).toHaveBeenCalledWith(credentials)
})

/**Use this link to figure out the guiding principles for testing :
 * https://testing-library.com/docs/queries/about#priority
 */
