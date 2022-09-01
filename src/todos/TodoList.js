import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { completeTodoRequest, loadTodos, removeTodoRequest } from './thunks'
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodos,
  // getTodos,
  getTodosLoading,
} from './selectors'
import styled from 'styled-components'

const ListWrapper = styled.div`
  max-width: 680px;
  margin: auto;
  background: #f6f6f6;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #dddddd;
`

const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SectionTitle = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const TodoList = ({
  completedTodos,
  incompleteTodos,
  // todos = [],
  handleRemoveTodo,
  handleCompleteTodo,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])
  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <ListWrapper>
      <NewTodoForm />

      <SectionTitle>Incomplete:</SectionTitle>
      <ListSection>
        {incompleteTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            handleRemoveTodo={handleRemoveTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        ))}
      </ListSection>

      <SectionTitle>Complete:</SectionTitle>
      <ListSection>
        {completedTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            handleRemoveTodo={handleRemoveTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        ))}
      </ListSection>
    </ListWrapper>
  )

  return isLoading ? loadingMessage : content
}

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  // todos: getTodos(state)
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
})

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  handleRemoveTodo: (id) => dispatch(removeTodoRequest(id)),
  handleCompleteTodo: (id) => dispatch(completeTodoRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
