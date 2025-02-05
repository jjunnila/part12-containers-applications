import { render, screen } from '@testing-library/react'
import List from './List'

test('renders content', () => {
  const todo = {
    text: 'Testing during build process with multiple stages',
    done: true
  }

  render(<List todos={[todo]} deleteTodo={()=>{}} completeTodo={()=>{}} />)

  const element = screen.getByText('Testing during build process with multiple stages')
  expect(element).toBeDefined()
})