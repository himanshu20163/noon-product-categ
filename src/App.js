
import "./App.css"
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header"
import Allproductcategcompo from "./Components/Productcategories/Allproductcategcompo";

export default function App() {
  return (
    <div>
     <Header />
    
      {/* <Flex style={{margin:"0px 50px",height:"auto"}}>
        <Box flex={2}>
          <div>
            <ImageSlider slides={SlideData} />
          </div>
        </Box>
        <Box flex={1}>
          <div>
            <img src={banner} width="100%" height="450" style={{ margin: "0px 10px ", height: "210px" }} />
          </div>
        </Box>
      </Flex>
      <Brandslider />
      <Allbox />
      <Fastdeliverybox />
      <Allrecommandbox />
      <AllMainproduct /> */}
      {/* <Productcategories /> */}
     {/* <Allproductcomponent /> */}
     <Allproductcategcompo />
      <Footer />
    </div>
  );
}