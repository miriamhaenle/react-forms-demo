import React from 'react'
import Tags from './Tags'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Component/Tags',
  component: Tags,
}

const Template = (args) => <Tags {...args} />

export const TagList = Template.bind({})
TagList.args = {
  headline: 'Interests',
  tags: ['HTML', 'CSS', 'React'],
}
