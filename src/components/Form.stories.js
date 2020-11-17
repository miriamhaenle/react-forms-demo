import React from 'react'
import Form from './Form'

export default {
  title: 'Components/Form',
  component: Form,
}

const Template = (args) => <Form {...args} />

export const RegisterForm = Template.bind({})
RegisterForm.args = {
  title: 'Register',
  buttonText: 'Register',
}

export const UpdateUserForm = Template.bind({})
UpdateUserForm.args = {
  title: 'Edit User',
  buttonText: 'Update',
  submitAction: 'updateUser',
}
