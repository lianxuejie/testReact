import React from "react";
import ReactDOM from 'react-dom/client'
import TestComponent from './test.jsx';
import BasicLayout from "./routes/AppRouter.js";
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

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
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
