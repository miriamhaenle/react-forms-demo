import React from 'react'
import Form from './Form'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Component/Form',
  component: Form,
}

const Template = (args) => <Form {...args} />

export const RegisterForm = Template.bind({})
RegisterForm.args = {
  title: 'Registration',
  buttonText: 'Register',
}

export const EditForm = Template.bind({})
EditForm.args = {
  title: 'Edit Profile',
  buttonText: 'Edit',
}
