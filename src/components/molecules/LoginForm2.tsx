import React, { useState } from "react"

type Props = {
  envoyer?: any
}

export default function LoginForm2({ envoyer }: Props) {
  const [values, setValues] = useState({ username: "", password: "" })

  const handleSubmit = (event: any) => {
    event.preventDefault()
    envoyer(values)
  }

  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input id="username" value={values.username} onChange={handleChange} />

      <label htmlFor="password">Password:</label>
      <input id="password" value={values.password} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
