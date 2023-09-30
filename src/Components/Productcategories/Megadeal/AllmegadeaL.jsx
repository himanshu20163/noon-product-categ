import React from 'react'
import Singlemegadeal from './Singlemegadeal'
import { Flex, Wrap } from '@chakra-ui/react'
import "./megadeal.css";


const AllmegadeaL = () => {
  return (
    <div className='almegadeal-container'>
        <h2 style={{marginLeft:"20px"}}>Mega deals</h2>
        <Flex flexWrap={"Wrap"}>
        <Singlemegadeal />
        <Singlemegadeal />
        <Singlemegadeal />
        <Singlemegadeal />
        <Singlemegadeal />
        <Singlemegadeal />
        </Flex>
        
    </div>
  )
}

export default AllmegadeaL