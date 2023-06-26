import { Box, Image, Show, Flex, Stack, Icon } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { AvatarsIcon, GenerateIcon, HistoryIcon, LogoutIcon } from '../../components/icons/index'

const MenuContent = () => {
  const linkItemIconStyle = {
    color: "currentcolor",
    stroke: "currentcolor",
    fontSize: "24px",
    background: "transparent",
    mr: "16px",
  }
  const menus = [
    {
      url: "/index",
      key: "index",
      iconName: <AvatarsIcon {...linkItemIconStyle}></AvatarsIcon>,
      name: "Magic Avatars",
    },
    {
      url: "/generate",
      key: "index",
      iconName: <GenerateIcon {...linkItemIconStyle}></GenerateIcon>,
      name: "Magic Generate",
    },
    {
      url: "/history",
      key: "index",
      iconName: <HistoryIcon {...linkItemIconStyle}></HistoryIcon>,
      name: "Historical order",
    }
  ]
  const activePath = '/index'
  const linkItemStyle = {
    borderRadius: "md",
    py: 3,
    role: "group",
    px: 3,
    _hover: {
      bg: "#1b1c20",
      color: "#fff",
    },
    cursor: "pointer",
  };
  
  return (
    <Box height='100%' color="var(--chakra-colors-theme-3)">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        height="100%"
      >
        <Stack alignItems="flex-start" mb="1" mt="5" px="5" w="100%">
          <Flex justifyContent={'space-between'}>
            <Image boxSize='15px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            <Show above='md'>
              <ArrowBackIcon></ArrowBackIcon>
            </Show>
          </Flex>
        </Stack>
        
        <Stack w="100%" px="5">
          {
            menus.map((item, index) => {
              return (
                <Box
                  key={index}
                  fontSize="md"
                  {...linkItemStyle}
                >
                  <Flex
                  align-items="center"
                  width="100%"
                  color={ item.url === activePath ? 'var(--chakra-colors-theme-1)' : '' }
                  >
                    {item.iconName}
                    {item.name}
                  </Flex>
                </Box>
              )
            })
          }
        </Stack>
        <Stack w="100%" mt="auto" px="5">
          <Box
            fontSize="md"
            {...linkItemStyle}
          >
            <Flex
              align-items="center"
              width="100%"
            >
              <LogoutIcon  {...linkItemIconStyle}/>
              Logout
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}
export default MenuContent
