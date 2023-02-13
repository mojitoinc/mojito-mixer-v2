import React from 'react'
import { Container } from '../src/component/core/Container'
import { Box } from '@mui/material'
import { render } from '../test-utils'

describe('<Header />', () => {
  it('should have a Header', () => {
    const wrapper = render(<Container isPaymentConfirmation></Container>)
    const testInstance = wrapper.root
    expect(testInstance.findByType(Box)).toBeDefined()
  })
})
