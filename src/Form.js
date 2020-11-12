import { useState } from 'react'
import styled from 'styled-components/macro'
import Tags from './Tags'

export default function Form({ checkRegistrationStatus }) {
  const initialUser = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    toc: false,
    tags: [],
  }
  const [userProfile, setUserProfile] = useState(initialUser)
  const [isLoading, setIsLoading] = useState(false)

  function register(event) {
    event.preventDefault()
    if (validRegistration(userProfile)) {
      setIsLoading(true)
      postUser(userProfile)
        .then((data) => data.json())
        .then((newUser) => {
          handlePostUserResponse(newUser)
        })
        .catch(handlePostUserError)
    } else {
      alert('Please check the form and accept our TOC')
    }
  }

  async function postUser(user) {
    /*     await new Promise((res) => {
      setTimeout(() => res(), 2000)
    }) */
    return fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
  }

  function handlePostUserResponse(user) {
    setIsLoading(false)
    setUserProfile(user)
    checkRegistrationStatus()
  }

  function handlePostUserError(error) {
    setIsLoading(false)
    console.error(error)
  }

  function handleInputChange(event) {
    const fieldName = event.target.name
    const fieldValue =
      fieldName === 'toc' ? event.target.checked : event.target.value
    setUserProfile({ ...userProfile, [fieldName]: fieldValue })
  }

  function updateTags(tag) {
    setUserProfile({
      ...userProfile,
      tags: [...userProfile.tags, tag],
    })
  }

  function deleteTags(currentTag) {
    const updatedTagList = userProfile.tags.filter((tag) => tag !== currentTag)
    setUserProfile({ ...userProfile, tags: [...updatedTagList] })
  }

  function deleteLastTag() {
    const updatedTagList = userProfile.tags.slice(
      0,
      userProfile.tags.length - 1
    )
    setUserProfile({ ...userProfile, tags: [...updatedTagList] })
  }

  return (
    <RegisterForm onSubmit={register}>
      <h1>Registration</h1>

      <Fieldset>
        <div>
          <label htmlFor="firstname" id="firstname">
            <strong>First name</strong>
          </label>
          <input
            aria-labelledby="firstname"
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={userProfile.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastname" id="lastname">
            <strong>Last name</strong>
          </label>
          <input
            aria-labelledby="lastname"
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={userProfile.lastName}
          />
        </div>
      </Fieldset>

      <div>
        <label htmlFor="email" id="email">
          <strong>Email</strong>
        </label>
        <input
          aria-labelledby="email"
          type="text"
          name="email"
          onChange={handleInputChange}
          value={userProfile.email}
        />
      </div>

      <h4>Gender</h4>
      <Fieldset>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleInputChange}
            checked={userProfile.gender === 'male'}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleInputChange}
            checked={userProfile.gender === 'female'}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="diverse"
            onChange={handleInputChange}
            checked={userProfile.gender === 'diverse'}
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
      <Tags
        tags={userProfile.tags}
        onUpdateTags={updateTags}
        headline="Your interests"
        onDeleteTag={deleteTags}
        deleteLastTag={deleteLastTag}
      />
      <Button isLoading={isLoading} type="submit">
        <span>Register</span>
        {isLoading && <Loader />}
      </Button>
    </RegisterForm>
  )
}

const validateName = ({ firstName, lastName }) =>
  firstName.length >= 2 && lastName.length >= 2

const validateEmail = ({ email }) =>
  email.includes('@') && hasValidEmailDomain(email)

const hasValidEmailDomain = (email) => {
  const parts = email.split('.')
  return parts[parts.length - 1].length >= 2
}

const tocAccepted = ({ toc }) => toc === true

const validRegistration = (userProfile) =>
  validateName(userProfile) &&
  validateEmail(userProfile) &&
  tocAccepted(userProfile)

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
    padding: 0.25rem;
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
  background-color: ${(props) => (props.isLoading ? 'gray' : '#1b7e64')};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px 11px;
  font-size: 1.25rem;
  border-radius: 5px;
  border: none;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
`

const TermsAndConditions = styled.div`
  margin: 1rem 0;
`

const Loader = styled.span`
  display: inline-block;
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
  width: 12px;
  height: 12px;
  border-top: 5px solid rgba(255, 255, 255, 0.2);
  border-right: 5px solid rgba(255, 255, 255, 0.2);
  border-bottom: 5px solid rgba(255, 255, 255, 0.2);
  border-left: 5px solid #ffffff;
  border-radius: 50%;
  animation: load 1s linear infinite;

  &::before {
    border-radius: 50%;
    height: 12px;
    width: 12px;
  }

  @keyframes load {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
