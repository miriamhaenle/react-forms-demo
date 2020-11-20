import React from 'react'
import Button from './Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Component/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const RegisterButton = Template.bind({})
RegisterButton.args = {
  buttonText: 'Register',
  isLoading: false,
}

export const LoadingButton = Template.bind({})
LoadingButton.args = {
  buttonText: 'Register',
  isLoading: true,
}
