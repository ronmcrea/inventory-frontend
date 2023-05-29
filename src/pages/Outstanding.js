import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import axios from "axios";
import React from "react";

const Outstanding = () => {
    const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `http://localhost:8000/api/borrows`
      );
      console.log(result.data);
      setItems(result.data);
    };
    fetchItems();
  }, []);
    
    return         <TableContainer>
    <Table variant='simple'>
        <Thead>
            <Tr>
                <Th>Item Name</Th>
                <Th>Student</Th>
                <Th>Register Number</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Date</Th>
                <Th isNumeric>Quantity</Th>
            </Tr>
        </Thead>
        <Tbody>
                { items.map(( data, index ) => {
                    if(data.status == "Not Returned"){
                    return (
                        <Tr>
                            <Td>{data.itemName}</Td>
                            <Td>{data.name}</Td>
                            <Td>{data.regNo}</Td>
                            <Td>{data.email}</Td>
                            <Td>{data.phoneNo}</Td>
                            <Td>{data.borrowDate}</Td>
                            <Td isNumeric>{data.quantity}</Td>         
                            <Td><Button colorScheme={'teal'}>Return</Button></Td>
                        </Tr>
                    );      
                }
                })}
        </Tbody>
    </Table>
</TableContainer>;
  };
  
  export default Outstanding;