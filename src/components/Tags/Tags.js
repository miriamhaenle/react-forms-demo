import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Tags({
  tags,
  onUpdateTags,
  headline,
  onDeleteTag,
  deleteLastTag,
}) {
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

    if (event.key === 'Backspace') {
      console.log('x')
      deleteLastTag(tags)
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

Tags.propTypes = {
  headline: PropTypes.string,
  tags: PropTypes.array.isRequired,
}

const Tag = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem;

  input {
    border: none;
    font-size: 0.9rem;
    width: 30%;
  }

  label {
    font-weight: bold;
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
