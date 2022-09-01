import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodoRequest } from './thunks'
import { getTodos } from './selectors'

const NewTodoForm = ({ todos, handleCreateTodo }) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some((todo) => todo.text === inputValue)

          if (!isDuplicateText) {
            handleCreateTodo(inputValue)
            setInputValue('')
          }
        }}
      >
        Create Todo
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: getTodos(state),
})

const mapDispatchToProps = (dispatch) => ({
  handleCreateTodo: (text) => dispatch(addTodoRequest(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
