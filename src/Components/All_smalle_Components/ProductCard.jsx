import { Badge, Flex,  Text, VStack } from '@chakra-ui/react';
import React from 'react'
import HoverImage from "react-hover-image";
import { useNavigate } from 'react-router-dom'


//  <HoverImage src={yourFile} hoverSrc={yourFileHover} />

const ProductCard = ({
    id,
Display_image,
hover_Image,
Title,
price,
strikeprice,

}) => {

  const navigate = useNavigate()

         // to navigate to More Product Details
    const VisitSingleProduct = () =>{

       navigate(`/products/${id}`)
         
      
    }



  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between"}} >
      
      <HoverImage onClick={VisitSingleProduct} src={Display_image} hoverSrc={hover_Image} alt={Title} />
      
      <VStack align="revert-layer" >
        <Text fontSize="20"  fontStyle="oblique" fontWeight="bold" marginTop={2}  >Bewakoof</Text>
        <Text  fontSize="15" color="gray.500" >{Title}</Text>
        <Flex>
        <Text fontWeight="bold" fontSize="2xl" >₹{price}</Text>
       
        <Text as="s" marginLeft={4} >₹{strikeprice}</Text>
        </Flex>

        <Badge variant="subtle" colorScheme="teal"> ₹{price - 50} for tribe members   </Badge>
       </VStack>
      
     
    </div>
  )
}

export default ProductCard
