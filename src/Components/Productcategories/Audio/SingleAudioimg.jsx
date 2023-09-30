import React from 'react'
import Audioimg from "../../images/smartphone.png"
import { Flex ,Button} from '@chakra-ui/react'
import soundbar from "../../images/soundbar.png"

const SingleAudioimg = () => {
  return (
    <div>
        <div style={{margin:"10px",padding:"20px"}}>
        <Flex justify={"space-between"}>
        <h2>Audio video</h2>
        <Button>View All </Button>
        </Flex>
        </div>
       
       <Flex>
       <img src={soundbar} style={{margin:"0px 10px"}}/>
        <img src={soundbar} style={{margin:"0px 10px"}}/>
        <img src={soundbar} style={{margin:"0px 10px"}}/>
        <img src={soundbar} style={{margin:"0px 10px"}}/>
        <img src={soundbar} style={{margin:"0px 10px"}}/>
        <img src={soundbar} style={{margin:"0px 10px"}}/>
        <img src={soundbar} style={{margin:"0px 10px"}}/>
       </Flex>
       
       
        
    </div>
  )
}

export default SingleAudioimg