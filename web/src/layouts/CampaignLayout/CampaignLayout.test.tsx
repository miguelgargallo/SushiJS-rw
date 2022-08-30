import { render } from '@redwoodjs/testing/web'

import CampaignLayout from './CampaignLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CampaignLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CampaignLayout />)
    }).not.toThrow()
  })
})
