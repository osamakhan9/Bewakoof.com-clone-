
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import DiscountProduct from '../All_smalle_Components/DiscountProduct'
import Loading from '../All_smalle_Components/Loding'
import PopularCat from '../All_smalle_Components/PopularCat'
import SliderImages from '../All_smalle_Components/SliderImages'
import StoopidCollection4D from '../All_smalle_Components/StoopidCollection4D'
import TwoImage from '../All_smalle_Components/TwoImages'




function LandingPage (){

  const {data} = useContext(AppContext)
  console.log(data.PopularCat.men)

  // for products
 const path = "/men-clothing"

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
   
   <SliderImages data={data.SliderData.men} path={path}  />
   <TwoImage img1={data.longDiv.men} 
   img2={data.smallProduct.men} 
   img3={data.giftVoucher.forAll} path={path} 
   />
   <PopularCat data={data.PopularCat.men} path={path}  />

        {/* SLIDER PENDING */}

      


   <DiscountProduct data={data.DiscountProduct.men} path={path} />
 
   

   <SliderImages data={data.SliderData.men2} path={path}  />

   {/* SLIDER PENDING */}

  
   <StoopidCollection4D data={data.DiscountProduct.stoopid} path={path}  />
   <TwoImage img1={data.longDiv.men2} 
   img3={data.longDiv.men3} 
   path={path} 
   />
    </div>
  



  )
}

export default LandingPage
