import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import telivison from "../../images/telivison.jpg"
import "./megadeal.css";

const Singlemegadeal = () => {
  return (
    <div>
        <Box className='single-megadeal-box'>
            <Flex>
                <Box className='megadeal-content-box'>
                    <h5 className='telivision-deal-title'>Telivision deals</h5>
                    <p>
                    Sony, Impex & more
           <h3>Up to 60% off</h3> 
                    </p>
                </Box>
               <Box>
                <img src={telivison} />
               </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default Singlemegadeal