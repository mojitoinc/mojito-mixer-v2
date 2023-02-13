import React from 'react'
import { Button } from '../src/lib/components'
import { Box } from '@mui/material'
import { render } from '../test-utils'

describe('<Header />', () => {
  it('should have a Button', () => {
    const wrapper = render(<Button isPaymentConfirmation></Button>)
    const testInstance = wrapper.root
    expect(testInstance.findByType(Box)).toBeDefined()
  })
})
