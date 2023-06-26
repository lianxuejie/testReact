import { Box, Flex } from '@chakra-ui/react'
import MenuContent from './MenuContent'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'


const LeftMenu = () => {
  const leftStyle = {
    color: "#A7B2C1",
    borderRight: "1px",
    bg: "#000000",
    borderRightColor: "#2F3037",
    pt: 3,
    h: '100%',
    zIndex: 1,
  }
  return (
    <Box h={{ base: 'auto', md: '100%'}}>
      <Box {...leftStyle}>
        <MenuContent></MenuContent>
      </Box>
      <Box display={{ base: "flex", md: "none",}} justifyContent='space-between'>
        <HamburgerIcon></HamburgerIcon>
        <Image boxSize='15px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box>
    </Box>
  )
}

export default LeftMenu
