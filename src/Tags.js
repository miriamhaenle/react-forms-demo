import { useState } from 'react'
import styled from 'styled-components/macro'

export default function Tags({ tags, onUpdateTags, headline }) {
  const [inputValue, setInputValue] = useState('')

  function handleChange(event) {
    setInputValue(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      onUpdateTags(inputValue)
      setInputValue('')
    }
  }

  return (
    <Tag>
      <label htmlFor="tag">{headline}</label>
      <input
        name="tag"
        type="text"
        placeholder="Insert tag"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {tagsList(tags)}
    </Tag>
  )
}

function tagsList(tags) {
  return (
    <section>
      {tags.map((tag, index) => (
        <span key={index}>{tag} </span>
      ))}
    </section>
  )
}

const Tag = styled.div`
  label {
    font-weight: bold;
  }

  span {
    background-color: deeppink;
    border-radius: 3px;
    color: white;
    display: inline-block;
    padding: 0.5rem;
    margin: 0.5rem 0.5rem 0 0;
  }
`
