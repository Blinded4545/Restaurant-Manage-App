
import { Grid, Text, Button, GridItem } from "@chakra-ui/react"
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { jsPDF } from 'jspdf'

type Props = {
    orderDetails: { product: string; quantity: number; price: number; }[],
    deleteOrder: ()=>void,
    tableID: number,
}

let doc = new jsPDF()

export const OrderList = ({orderDetails, deleteOrder}: Props) => {
    const [currOrderDetails, setCurrOrderDetails] = useState(orderDetails)
    const [backupOrderDetails, setBackupOrderDetails] = useState<any>([])

    const deleteItem = (index: number)=>{
        let newOrderDetails = currOrderDetails
        newOrderDetails.splice(index, index)

        if(index==0){
            deleteOrder()
        }

        setBackupOrderDetails(currOrderDetails)
        setCurrOrderDetails(newOrderDetails)
    }

    const revertDeletion = ()=>{
        setCurrOrderDetails(backupOrderDetails)
    }

    return (
        <div>
            {
                orderDetails.map((e,i)=>(
                    <div className="orderListItems">

                        <Grid templateColumns='repeat(5,1fr)' alignItems='center'>
                            <GridItem>
                                <Text>{e.product}</Text>
                            </GridItem>
                            <GridItem>
                                <Text>{e.quantity}</Text>
                            </GridItem>
                            <GridItem>                            
                                <Text>{e.price}</Text>
                            </GridItem>
                            <GridItem>
                                <Button className='tableOrderButtons' bg='red.solid' onClick={()=>deleteItem(i)}>
                                    <Trash size={6}/>
                                    <Text>{i}</Text>
                                </Button>
                            </GridItem>
                            <GridItem>
                                <Button className='tableOrderButtons' bg='blue.solid'>
                                    <Pencil size={6}/>
                                </Button>
                            </GridItem>
                        </Grid>

                    </div>
                ))
            }
        </div>
  )
}