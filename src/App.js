import React from 'react'
import { hot } from 'react-hot-loader'
import TodoList from './todos/TodoList'
import styled from 'styled-components'

const AppContainer = styled.div`
  margin: 2rem 1.5rem;
`

const App = () => (
  <AppContainer>
    <TodoList />
  </AppContainer>
)

export default hot(module)(App)
