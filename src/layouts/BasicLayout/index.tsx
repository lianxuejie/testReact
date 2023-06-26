import React from 'react'
import { useOutlet  } from 'react-router-dom'
import { Grid, GridItem } from '@chakra-ui/react'
import LeftMenu from '../components/LeftMenu';

type Props = {
  children?: React.ReactNode
};

const  BasicLayout = ({ children }: Props) => {
  const outlet = useOutlet();
  return (
    <Grid
      gridTemplateColumns={{base: '0 auto', md: '250px auto'}}
      gap={{base: '0', md: '4'}}
      bg='#000'
      minH='100vh'
    >
      <GridItem>
        <LeftMenu></LeftMenu>
      </GridItem>
      <GridItem>
        {outlet}
      </GridItem>
    </Grid>
  )
}
export default BasicLayout
