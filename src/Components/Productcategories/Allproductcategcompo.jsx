 import React from 'react'
import ImageSlider from '../Slider/ImageSlider'
import { SlideData } from './Slider/SlideData'
import Brandslider from '../Brand/Brandslider'
import Accesories from './Accessories/Accesories'
import SingleAudioimg from './Audio/SingleAudioimg'
import AllmegadeaL from './Megadeal/AllmegadeaL'
 
 const Allproductcategcompo = () => {
   return (
     <div style={{margin:"0px 20px",backgroundColor:"#fff"}}>
       <ImageSlider slides={SlideData} />
       <Brandslider />
       <Accesories />
       <SingleAudioimg />
       <AllmegadeaL />
     </div>
   )
 }
 
 export default Allproductcategcompo