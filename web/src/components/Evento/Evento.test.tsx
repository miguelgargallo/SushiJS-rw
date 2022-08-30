import { render } from '@redwoodjs/testing/web'

import Evento from './Evento'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Evento', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Evento />)
    }).not.toThrow()
  })
})
