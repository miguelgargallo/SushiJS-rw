import { render } from '@redwoodjs/testing/web'

import TrabajoPage from './TrabajoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TrabajoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrabajoPage />)
    }).not.toThrow()
  })
})
