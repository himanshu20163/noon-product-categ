import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import samsung from "../../images/samsung.jpg"
import lipstik from "../../images/lipstik.jpg";
import Singleproduct from "./Singleproduct";
import { Flex } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";


const Allproductbox = () => {
    return (
        <div style={{ width: "100%" }}>
            <div style={{ backgroundColor: "#fff",margin:"20px 0px" }}>
                <Flex wrap="wrap" >
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={samsung} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={samsung} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={samsung} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={samsung} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={samsung} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={samsung} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                </Flex>

            </div>
        </div>

    )
}
export default Allproductbox;
