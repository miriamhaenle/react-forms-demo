import { useState } from 'react'
import ConfirmationPage from './ConfirmationPage'
import Form from './Form'

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
  )
}

export default App
