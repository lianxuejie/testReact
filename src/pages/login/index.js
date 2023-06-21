import React from 'react'

import './style.css'
import testStyle from './testStyle.module.less'

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