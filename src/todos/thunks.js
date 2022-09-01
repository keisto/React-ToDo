import {
  completeTodo,
  createTodo,
  loadingTodos,
  removeTodo,
  todosFailed,
  todosLoaded,
} from './actions'

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadingTodos())

    const response = await fetch('http://localhost:8080/todos')
    const todos = await response.json()

    dispatch(todosLoaded(todos))
  } catch (e) {
    dispatch(todosFailed())
    dispatch(displayAlert(e))
  }
}

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text })
    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    })
    const todo = await response.json()
    dispatch(createTodo(todo))
  } catch (e) {
    dispatch(displayAlert(e))
  }
}

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete',
    })
    const todo = await response.json()
    dispatch(removeTodo(todo))
  } catch (e) {
    dispatch(displayAlert(e))
  }
}

export const completeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: 'post',
      }
    )
    const todo = await response.json()
    dispatch(completeTodo(todo))
  } catch (e) {
    dispatch(displayAlert(e))
  }
}

export const displayAlert = (error) => () => {
  alert(error)
}
