import React from 'react'
import styled from 'styled-components'

// Component
import Button from '.'

const Div = styled.div`
  button {
    margin-right: 10px;
  }
`

export default {
  title: 'Components/Button',
  component: Button
}

export function Default() {
  return (
    <Div>
      <Button onClick={() => console.log('clicked')}>Click Me</Button>
      <Button primary onClick={() => console.log('clicked')}>
        Click Me
      </Button>
      <Button secondary onClick={() => console.log('clicked')}>
        Click Me
      </Button>

      <Button disabled onClick={() => console.log('clicked')}>
        Click Me
      </Button>
    </Div>
  )
}
