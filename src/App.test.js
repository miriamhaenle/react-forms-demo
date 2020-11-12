import App from './App'
import { render, fireEvent, act } from '@testing-library/react'
import user from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  )
  jest.spyOn(window, 'alert').mockImplementation(() => {})
})

describe('App', () => {
  it('Renders the confirmation page after registration', async () => {
    jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            toc: false,
            tags: [],
          }),
      })
    )
    const history = createMemoryHistory()
    const { getByLabelText, getByRole } = render(
      <Router history={history}>
        <App />
      </Router>
    )

    const firstName = getByLabelText('First name')
    const lastName = getByLabelText('Last name')
    const email = getByLabelText('Email')
    const toc = getByLabelText('Accept Terms and Conditions')
    const registerButton = getByRole('button', { name: /Register/i })

    await act(async () => {
      await setTimeout(() => Promise.resolve(), 100)
      user.type(firstName, 'Max')
    })

    await act(async () => {
      await setTimeout(() => Promise.resolve(), 100)
      user.type(lastName, 'Mustermann')
    })
    await act(async () => {
      await setTimeout(() => Promise.resolve(), 100)
      user.type(email, 'max.mustermann@mail.com')
    })

    await act(async () => {
      await setTimeout(() => Promise.resolve(), 100)
      fireEvent.click(toc, { target: { checked: false } })
    })

    await act(async () => {
      await setTimeout(() => Promise.resolve(), 100)
      fireEvent.click(registerButton)
    })

    expect(fetch).toHaveBeenCalled()
  })
})
