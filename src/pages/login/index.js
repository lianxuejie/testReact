import React from 'react'

import './style.less'
import testStyle from './testStyle.module.css'

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