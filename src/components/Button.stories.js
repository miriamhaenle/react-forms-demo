import React from 'react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  buttonText: 'Register',
  isLoading: false,
}

export const LoadingButton = Template.bind({})
LoadingButton.args = {
  buttonText: 'Update',
  isLoading: true,
}
