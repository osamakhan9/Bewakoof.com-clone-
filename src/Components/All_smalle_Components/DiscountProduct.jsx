import { Image, SimpleGrid, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'




const DiscountProduct = ({data,path}) => {



 const Navigation = useNavigate()


  return (

    
        <VStack justify="center" marginTop="5" w="full" >
        <Text fontSize="20" fontWeight="bold"  >DISCOUNT PE DISCOUNT </Text>
          <SimpleGrid columns={[1,2,2]} spacing="2"  >

            {data.map((el)=>  (
                <Image src={el} style={{cursor:"pointer"}} onClick={()=>Navigation(path)} />
                ) )}

          </SimpleGrid>
        </VStack >
      


  )
               
}

export default DiscountProduct
