import { useState } from 'react'
import styled from 'styled-components/macro'

export default function Tags({ tags, onUpdateTags, headline, onDeleteTag }) {
  const [inputValue, setInputValue] = useState('')

  function handleChange(event) {
    setInputValue(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      onUpdateTags(inputValue.toUpperCase())
      setInputValue('')
    }
  }

  return (
    <>
      <h4>{headline}</h4>
      <Tag>
        {tagsList(tags, onDeleteTag)}

        <input
          name="tag"
          type="text"
          placeholder="Insert tag"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Tag>
    </>
  )
}

function tagsList(tags, onDeleteTag) {
  return (
    <>
      {tags.map((tag, index) => (
        <span key={index}>
          {tag} <strong onClick={() => onDeleteTag(tag)}>X</strong>
        </span>
      ))}
    </>
  )
}

const Tag = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;

  label {
    font-weight: bold;
  }

  input {
    border: none;
    font-size: 0.9rem;
    width: 20%;
  }

  span {
    background-color: deeppink;
    border-radius: 3px;
    color: white;
    display: inline-block;
    padding: 0.5rem;
    margin: 0.5rem;
  }
`
