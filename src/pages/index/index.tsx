import React from 'react'
import { useColorMode, Button, Box } from '@chakra-ui/react'
import { useAppStore } from '../../store/app.store';
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
  // 静态
  const { setFreeNumber } = useAppStore.getState()
  // 动态
  const freeNumber = useAppStore((state) => state.freeNumber)
  const changeFreeNum = () => {
    setFreeNumber(3)
  }
  return (
    <div>
      <h2 className='red-font'>index</h2>
      <div>
        <Example></Example>
      </div>
      <Box>
        store test: freeNumber - {freeNumber}
        <Box>
          <Button colorScheme='blue' onClick={changeFreeNum}>Button</Button>
        </Box>
      </Box>
    </div>
  )
}

export default IndexPage