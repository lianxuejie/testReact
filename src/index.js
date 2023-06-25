import React from "react";
import ReactDOM from 'react-dom/client'
import TestComponent from './test.jsx';
import BasicLayout from "./routes/AppRouter.js";
import { ChakraProvider, ColorModeScript  } from '@chakra-ui/react'
import theme from './theme/theme.ts'

// https://juejin.cn/post/6844904035099623437#heading-21
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BasicLayout></BasicLayout>
    </ChakraProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
)
