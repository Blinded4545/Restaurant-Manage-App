import { Container, Box, SimpleGrid, Text, Flex, Button, Grid } from "@chakra-ui/react"
import { useState} from "react"
import { OrderList } from "./OrderList"


type Props={
    tableIndex: number
}

export const TableOrder = ({tableIndex}: Props) => {
    //Aqui hay que implementarlo luego con la base de datos para conectar entre cliente y listado
    //Al cliente terminar de elegir lo que va a pedir, debe actualizarse la orden de la mesa
    const [orderItems, setOrderItems] = useState([
        [
            {
                product: 'Coke',
                quantity: 2,
                price: 2.755
            },
            {
                product: 'Pepsi',
                quantity: 5,
                price: 2
            }
        ]
        ,
        [
            {
                product: 'Pepsico',
                quantity: 2,
                price: 2.755
            },
            {
                product: 'Pepsi',
                quantity: 5,
                price: 2
            }
        ],
        [
            {
                product: 'Aaaaa',
                quantity: 2,
                price: 2.755
            },
            {
                product: 'Pepsi',
                quantity: 5,
                price: 2
            },
            {
                product: 'Pepsi',
                quantity: 5,
                price: 2
            }
        ],
        [],
        [
            {
                product: 'Aaaaa',
                quantity: 2,
                price: 2.755
            },
            {
                product: 'Pepsi',
                quantity: 5,
                price: 2
            }
        ],
        [],
        [],
        [],
        []
    ])
    
    const [backupOrder, setBackupOrder] = useState<any>([])


    const deleteOrder = () => {
        let newOrderItems = [...orderItems]
        newOrderItems[tableIndex] = []
        
        setBackupOrder(orderItems[tableIndex])
        setOrderItems(newOrderItems)
        
    }

    const revertOrder = ()=>{
        let revertedOrderItems=[...orderItems]

        revertedOrderItems[tableIndex]=backupOrder

        setOrderItems(revertedOrderItems)
    }

    return (
        <Container>
            <Box>
                <SimpleGrid gap='5'>
                    <Grid templateColumns='repeat(5, 1fr)'>
                        <Text>Product</Text>
                        <Text>Quantity</Text>
                        <Text>Price</Text>
                        <Text>Delete</Text>
                        <Text>Update</Text>
                    </Grid>

                    {
                        (orderItems[tableIndex][0]!=undefined)
                        ?
                        <OrderList orderDetails={orderItems[tableIndex]} tableID={tableIndex}/>
                        :
                        <div>
                            <Text padding='2'>No tiene ningun item</Text>
                            {
                                backupOrder[0]!=undefined
                                ?
                                <Button onClick={revertOrder}>Revert</Button>
                                :
                                <>
                                </>
                            }
                        </div>
                    }

                    <Flex justifyContent='space-between' marginBottom='2'>
                        <Button bg='red.focusRing' className='tableOrderButtons' onClick={deleteOrder}>Delete Order</Button>
                        <Button bg='blue.solid' className='tableOrderButtons'>Print Order</Button>
                    </Flex>
                </SimpleGrid>
            </Box>
        </Container>
    )
}