import React from 'react'
import { useColorMode, Button } from '@chakra-ui/react'

import './style.less'
function Example() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  )
}
const IndexPage = () => {
  return (
    <div>
      <h2 className='red-font'>index</h2>
      <div>
        <Example></Example>
      </div>
    </div>
  )
}

export default IndexPage