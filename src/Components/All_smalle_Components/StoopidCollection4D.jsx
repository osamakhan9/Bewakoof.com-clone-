import { Image, SimpleGrid, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const StoopidCollection4D = ({data, path}) => {

 // console.log(data)
 const Navigation = useNavigate()


  return (

    
        <VStack justify="center" marginTop="5" w="full" >

        <Text fontSize="20" fontWeight="bold"  >THE STOOPID COLLECTION </Text>
          <SimpleGrid columns={[1,2,2]} spacing="2"  >

            {data.map((el)=>  (
                <Image src={el} style={{cursor:"pointer"}} onClick={()=>Navigation(path)} />
                ) )}

          </SimpleGrid>

          
        </VStack >
      


  )
               
}

export default StoopidCollection4D
