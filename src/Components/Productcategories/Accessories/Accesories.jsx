import React from 'react'
import Allproductbox from './Allproductbox'
import { Box, Flex,Button } from '@chakra-ui/react'

const Accesories = () => {
  return (
    <div style={{margin:"20px",Width:"100%"}}>
        <Box>
        <Flex justifyContent={"space-between"}>
        <h4>Extra 10% off on laptop accessories</h4>
        <Button>View All </Button>
        </Flex>
        
        </Box>
        
         <Allproductbox />
    </div>
  )
}

export default Accesories