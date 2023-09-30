import { Box, Badge } from '@chakra-ui/react'
import React, { useState } from 'react'
import Heart from "react-animated-heart";
// import Productone from "./products-one.jpg";

const Singleproduct = (props) => {

  const [isClick, setClick] = useState(false);

  return (
    <Box style={{ marginLeft:"20px",width:"18%",padding:"20px" }} boxShadow='xl' >
      <Box style={{ display: "flex", justifyContent: "space-between", height: "50px", alignItems: "center",padding:"10px" }}>
        <Badge borderRadius='full' px='2' colorScheme='teal' style={{ height: "fit-content",background:"gray",color:"#fff" }}>
          Best Seller
        </Badge>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} styles={{ height: "100px", marginTop: "5px"}} />
      </Box>

      <Box style={{position:"relative"}}>
        <img src={props.image}  />
        <button style={{marginBottom:"-50px"}}>
          <img src="https://f.nooncdn.com/s/app/com/noon/icons/quick-atc-add-to-cart-grey.svg" alt="add-to-cart" width="20px" height="20px"  /></button>
        <h6>XiuWoo 3300-Piece Small
          Colourful Bracelet Beads Wit…</h6>
        <p>AED <b>17.60</b></p>
      </Box>
      <Box style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
        <Badge borderRadius='full' px='2' colorScheme='teal' style={{ height: "fit-content", backgroundColor: "yellow", fontStyle: "italic" }}>
          express
        </Badge>
        <Box style={{display:"flex"}}>
          <Badge borderRadius='full' px='2' colorScheme='teal' style={{ height: "fit-content", backgroundColor: "yellow", fontStyle: "italic" }}>
            {props.rating}
          </Badge>
          (4.2k)
        </Box>
      </Box>
    </Box>
  )
}

export default Singleproduct