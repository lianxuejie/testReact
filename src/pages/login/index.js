import React from 'react'

import './style.css'
import testStyle from './testStyle.module.less'

// google login
// https://juejin.cn/post/7130144051914866724
const LoginPage = () => {
  return (
    <div>
      <h2 className='red-font'>login async</h2>
      <div className={testStyle.title}>
        test red color
      </div>
    </div>
  )
}

export default LoginPage