import React from "react"
import logo from "./logo.svg"
import "./App.css"
import LoginForm from "./components/molecules/LoginForm"

export interface ICredentials {
  username: string
  password: string
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm submit={(values: ICredentials) => alert(JSON.stringify(values))} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
