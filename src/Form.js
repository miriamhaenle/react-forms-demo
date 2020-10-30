import { useState } from 'react'
import styled from 'styled-components/macro'

export default function Form() {
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    toc: false,
  })

  function register(event) {
    event.preventDefault()
    if (!userProfile.toc) {
      alert('Please confirm our ToC')
    }
    console.log(userProfile)
  }

  function handleInputChange(event) {
    const fieldName = event.target.name
    const fieldValue =
      fieldName === 'toc' ? event.target.checked : event.target.value

    setUserProfile({ ...userProfile, [fieldName]: fieldValue })
  }

  return (
    <RegisterForm onSubmit={register}>
      <h1>Registration</h1>

      <Fieldset>
        <div>
          <label htmlFor="firstname">
            <strong>First name</strong>
          </label>
          <input type="text" name="firstName" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="lastname">
            <strong>Last name</strong>
          </label>
          <input type="text" name="lastName" onChange={handleInputChange} />
        </div>
      </Fieldset>

      <div>
        <label htmlFor="email">
          <strong>Email</strong>
        </label>
        <input type="text" name="email" onChange={handleInputChange} />
      </div>

      <h4>Gender</h4>
      <Fieldset>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleInputChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleInputChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="diverse"
            onChange={handleInputChange}
          />
          Diverse
        </label>
      </Fieldset>
      <TermsAndConditions>
        <label>
          <input
            type="checkbox"
            name="toc"
            onChange={handleInputChange}
            checked={userProfile.toc}
          />
          Accept Terms and Conditions
        </label>
      </TermsAndConditions>
      <Button>Register</Button>
    </RegisterForm>
  )
}

const RegisterForm = styled.form`
  max-width: 32rem;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  font-family: sans-serif;

  h1 {
    color: #2ddcb4;
  }

  h4 {
    margin-bottom: 0;
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
  }

  input {
    font-size: 1.25rem;
    padding: 0.125rem;
  }

  input[type='radio'],
  input[type='checkbox'] {
    margin-left: 0;
    transform: scale(1.5);
    margin-right: 0.75rem;
  }
`

const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`

const Button = styled.button`
  color: white;
  background-color: #1b7e64;
  padding: 9px 20px 11px;
  font-size: 1.25rem;
  border-radius: 5px;
  border: none;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
`

const TermsAndConditions = styled.div`
  margin: 1rem 0;
`
