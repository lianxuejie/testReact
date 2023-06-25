import React from 'react'
import type {ReactElement} from 'react';
import { useOutlet  } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
};

const  BasicLayout = ({ children }: Props) => {
  const outlet = useOutlet();
  return (
    <>
      {outlet}
    </>
  )
}
export default BasicLayout
