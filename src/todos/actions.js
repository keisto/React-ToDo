export const CREATE_TODO = 'CREATE_TODO'
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
})

export const COMPLETE_TODO = 'COMPLETE_TODO'
export const completeTodo = (todo) => ({
  type: COMPLETE_TODO,
  payload: { todo },
})

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
})

export const LOADING_TODOS = 'LOADING_TODOS'
export const loadingTodos = () => ({
  type: LOADING_TODOS,
})

export const TODOS_LOADED = 'TODOS_LOADED'
export const todosLoaded = (todos) => ({
  type: TODOS_LOADED,
  payload: { todos },
})

export const TODOS_FAILED = 'TODOS_FAILED'
export const todosFailed = () => ({
  type: TODOS_FAILED,
})
