import {
  COMPLETE_TODO,
  CREATE_TODO,
  LOADING_TODOS,
  REMOVE_TODO,
  TODOS_FAILED,
  TODOS_LOADED,
} from './actions'

const initialState = { isLoading: false, data: [] }

export const todos = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload
      return { ...state, data: [...state.data, todo] }
    }
    case COMPLETE_TODO: {
      const { todo: newTodo } = payload

      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === newTodo.id) {
            return newTodo
          }

          return todo
        }),
      }
    }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      }
    }

    case TODOS_LOADED: {
      const { todos } = payload
      return {
        ...state,
        isLoading: false,
        data: todos,
      }
    }
    case LOADING_TODOS:
      return { ...state, isLoading: true }
    case TODOS_FAILED: {
      return { ...state, isLoading: false }
    }
    default:
      return state
  }
}
