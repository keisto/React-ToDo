import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  padding: 1rem;
  background-color: white;
  box-shadow: 0 3px 12px rgba(10, 10, 10, 0.25);
  border-radius: 0.5rem;
`

const ItemContainerWithWarning = styled(ItemContainer)`
  border-left: ${(props) =>
    new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
      ? 'none'
      : '8px solid red'};
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`
const FooterContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`

const CreatedAt = styled.p`
  color: #888888;
  margin: 0;
`

const Button = styled.div`
  height: 36px;
  background: black;
  color: white;
  font-size: 0.875rem;
  padding: 0 1rem;
  display: inline-flex;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all ease-out 0.1s;
  &:hover {
    background: white;
    color: black;
    border: 2px solid black;
  }
`

const TodoListItem = ({ todo, handleRemoveTodo, handleCompleteTodo }) => {
  const Container = todo.isCompleted ? ItemContainer : ItemContainerWithWarning
  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <FooterContainer>
        <CreatedAt>
          Created at:&nbsp;
          {new Date(todo.createdAt).toLocaleDateString()}
        </CreatedAt>
        <ButtonContainer>
          {todo.isCompleted ? null : (
            <Button
              onClick={() => {
                handleCompleteTodo(todo.id)
              }}
            >
              Mark As Completed
            </Button>
          )}
          <Button
            onClick={() => {
              handleRemoveTodo(todo.id)
            }}
          >
            Remove
          </Button>
        </ButtonContainer>
      </FooterContainer>
    </Container>
  )
}

export default TodoListItem
