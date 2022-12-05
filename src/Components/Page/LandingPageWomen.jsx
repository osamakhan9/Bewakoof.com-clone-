
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import DiscountProduct from '../All_smalle_Components/DiscountProduct'
import Loading from '../All_smalle_Components/Loding'
import PopularCat from '../All_smalle_Components/PopularCat'
import SliderImages from '../All_smalle_Components/SliderImages'
import StoopidCollection4D from '../All_smalle_Components/StoopidCollection4D'
import TwoImage from '../All_smalle_Components/TwoImages'






function LandingPageWomen (){

  const {data} = useContext(AppContext)


    // for products
 const path = "/women-clothing"


 
 // is Loading   // 
 const [isLoading, setIsLoading] = useState(true);

 setTimeout(() => {
  setIsLoading(false)
 
 }, 1500);
  

 // console.log(data)

 if(isLoading){

  return (
  
    
     <Loading />
   

    ) 

 }

  return (

    <div style={{marginTop: "150px"}} >
   
   
   <SliderImages data={data.SliderData.women}  path={path}   />
   <TwoImage img1={data.longDiv.women} img2={data.smallProduct.women} img3={data.giftVoucher.forAll}  path={path}   />

   <PopularCat data={data.PopularCat.women}   path={path}  />

   <DiscountProduct data={data.DiscountProduct.women} path={path} />

  {/* SLIDER PENDING */}



   <SliderImages data={data.SliderData.women2}  path={path}  />


   <StoopidCollection4D data={data.DiscountProduct.stoopidWomen}  path={path}  />

        {/* SLIDER PENDING */}

  


   <TwoImage img1={data.longDiv.men2} 
   img3={data.longDiv.men3} 
   path={path} 
   />
    </div>


  )
}

export default LandingPageWomen
