import React from 'react'

const Idea = (props) => {
  return (
    <div>

      <input
        type="text"
        name="title"
        value={props.idea.title}
        onChange={(event) => props.handleChange(props.idea, event)}
        onBlur={() => {
        props.updateIdea(props.idea)
      }}/>

      <textarea
        name="description"
        value={props.idea.description}
        onChange={(event) => props.handleChange(props.idea, event)}
        onBlur={() => {
        props.updateIdea(props.idea)
      }}/>

      <button onClick={() => {
        props.deleteIdea(props.idea)
      }}>
        Delete Idea
      </button>

    </div>
  )
}

export default Idea