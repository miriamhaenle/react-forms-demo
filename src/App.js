import { useState } from 'react'
import ConfirmationPage from './pages/ConfirmationPage'
import Form from './Form'
import { Switch, Route } from 'react-router-dom'
import AdminPage from './pages/AdminPage'

function App() {
  const initialUserState = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    toc: false,
    tags: [],
  }
  const [user, setUser] = useState(initialUserState)
  const [isRegistered, setIsRegistered] = useState(false)

  function updateRegistrationStatus() {
    setIsRegistered(!isRegistered)
  }

  function resetUserState() {
    setUser(initialUserState)
    setIsRegistered(false)
  }

  return (
    <Switch>
      <Route exact path="/">
        <div>
          {isRegistered ? (
            <ConfirmationPage
              firstName={user.firstName}
              lastName={user.lastName}
              clickHandler={resetUserState}
            />
          ) : (
            <Form checkRegistrationStatus={updateRegistrationStatus} />
          )}
        </div>
      </Route>
      <Route path="/admin/users">
        <AdminPage />
      </Route>
    </Switch>
  )
}

export default App
