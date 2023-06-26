// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const colors = {
  theme: {
    1: "#00FFFF", // 主题色
    2: "#FEE283", // 辅助黄
    3: "#A7B2C1", // 字体默认颜色
    bgcolor: "#1F2123",
    bordercolor: "#35393C",
    lgcolor: "linear-gradient(90.1deg, #00FFFF 0.06%, #02FFC2 99.89%)",
    igcolor: "#35393C",
  },
}
// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme