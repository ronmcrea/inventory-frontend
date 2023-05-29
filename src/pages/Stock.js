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
} from '@chakra-ui/react'
import axios from "axios";
import React from "react";

const Stock = () => {
    const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `http://localhost:8000/api/stocks`
      );
      console.log(result.data);
      setItems(result.data);
    };
    fetchItems();
  }, []);

    return <>
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Item Name</Th>
                        <Th>Description</Th>
                        <Th isNumeric>Quantity</Th>
                    </Tr>
                </Thead>
                <Tbody>
                { items.map(( data, index ) => {
                    return (
                        <Tr>
                            <Td>{data.itemName}</Td>
                            <Td>{data.description}</Td>
                            <Td isNumeric>{data.quantity}</Td>
                        </Tr>
                    );
                })}
                    
                </Tbody>
            </Table>
        </TableContainer>
    </>;
};

export default Stock;