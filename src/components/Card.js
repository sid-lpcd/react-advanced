import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <VStack spacing='10px' align='left' background='#FAF9F6' color='black' borderRadius='20px' pb='10px'>
      <Image src={imageSrc} borderRadius='20px'/>
      <VStack spacing='10px' align='left' pl='10px' pr='50px'>
        <Heading as='h5' size='sm'>
          {title}
        </Heading>
        <Text fontSize='sm'>{description}</Text>
        <HStack spacing='6px'>
          <Text>See more </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
