import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  Stack,
  Button,
  Flex,
  useToast
} from '@chakra-ui/react'
import { stripBasename } from '@remix-run/router';
import axios from "axios";
import React from 'react';

const AddStock = () => {
  const toast = useToast()
  const [name, setName] = React.useState()
  const [description, setDescription] = React.useState()
  const [quantity, setQuantity] = React.useState()


  const handleClick = () => {
    const inputData = { "itemName": name, "description": description, "quantity": quantity}
    axios.post('http://127.0.0.1:8000/api/stocks', inputData)
    .then(toast({
      title: 'Item Added',
      description: "Item is added to the stock",
      status: 'success',
      duration: 9000,
      isClosable: true,
      colorScheme: 'blue'
      
    }));
  }

  return <Flex p={10} width="70%"><FormControl>
    <Stack spacing={3}>
      <FormLabel>Name</FormLabel>
      <Input placeholder='Name of the Item' onChange={(e)=>{setName(e.target.value)}}/>
      <FormLabel>Description</FormLabel>
      <Input placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}}/>
      <FormLabel>Quantity</FormLabel>
      <NumberInput defaultValue={0} min={1} max={200} >
        <NumberInputField onChange={(e)=>{console.log(e.target.value);setQuantity(e.target.value)}}/>
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button colorScheme='teal' htmlSize={4} width='20%' onClick={handleClick}>Add Item</Button>
      
    </Stack>


  </FormControl>
  </Flex>
};

export default AddStock;