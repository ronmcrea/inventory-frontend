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
    InputGroup,
    InputLeftAddon,
    useToast,
    Spacer
} from '@chakra-ui/react'
import axios from "axios";
import React from 'react';

const Borrow = () => {
    const toast = useToast()
    
    
    const [name, setName] = React.useState()
    const [quantity, setQuantity] = React.useState()
    const [regNo, setRegNo] = React.useState()
    const [email, setEmail] = React.useState()
    const [phoneNo, setPhoneNo] = React.useState()

      const handleClick = () => {
        const inputData = { "itemName": itemName, "quantity": parseInt(quantity), "name": name, "regNo": regNo, "email": email, "phoneNo": phoneNo,}
        console.log(inputData)
        axios.post('http://127.0.0.1:8000/api/borrows', inputData)
        .then(toast({
            title: 'Item Borrowed',
            description: "Item is handed to the student",
            status: 'success',
            duration: 9000,
            isClosable: true,
            colorScheme: 'blue'
            
          }));
      }

    return <Flex p={10} width="70%" alignItems='center'>
        <FormControl>
        <Stack spacing={3}>
            <FormLabel>Item Name</FormLabel>
            <Input placeholder='Name of the Item' onChange={(e)=>{setItemName(e.target.value)}}/>
            <FormLabel>Quantity</FormLabel>
            <NumberInput defaultValue={0} min={1} max={200}>
                <NumberInputField onChange={(e)=>{setQuantity(e.target.value)}}/>
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <FormLabel>Student</FormLabel>
            <Input placeholder='Name of the Student' onChange={(e)=>{setName(e.target.value)}}/>
            <FormLabel>Roll Number</FormLabel>
            <Input placeholder='Roll Number of the student' onChange={(e)=>{setRegNo(e.target.value)}}/>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Email' type={'email'} onChange={(e)=>{setEmail(e.target.value)}}/>
            <FormLabel>Phone Number</FormLabel>
            <InputGroup>
                <InputLeftAddon children='+91' />
                <Input type='tel' placeholder='phone number' onChange={(e)=>{setPhoneNo(e.target.value)}}/>
            </InputGroup>
            <Button colorScheme='teal' htmlSize={4} width='20%' onClick={handleClick}>Borrow Item</Button>

        </Stack>


    </FormControl>
    </Flex>;
};

export default Borrow;