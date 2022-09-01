import { expect } from 'chai'
import { getCompletedTodos } from '../selectors'

describe('The getCompletedTodos select', () => {
  it('Returns only complete todos', () => {
    const fakeTodos = [
      {
        text: 'Say Hello',
        isCompleted: true,
      },
      {
        text: 'Say Goodbye',
        isCompleted: false,
      },
      {
        text: 'Go to the gym',
        isCompleted: false,
      },
    ]

    const expected = [
      {
        text: 'Say Hello',
        isCompleted: true,
      },
    ]

    const actual = getCompletedTodos.resultFunc(fakeTodos)

    expect(actual).to.deep.equal(expected)
  })
})
