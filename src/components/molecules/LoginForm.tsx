import { useState } from "react"
import { ICredentials } from "../../App"

interface LoginFormProps {
  submit: (values: ICredentials) => void
}

export default function LoginForm(props: LoginFormProps) {
  const { submit } = props

  const [values, setValues] = useState({
    username: "",
    password: "",
  })

  const handleSubmit = (event: any) => {
    event.preventDefault()
    submit(values)
  }

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.id]: event?.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" onChange={handleChange} value={values.username} />

      <label htmlFor="password">Password</label>
      <input id="password" onChange={handleChange} value={values.password} />

      <button type="submit">Submit</button>
    </form>
  )
}
