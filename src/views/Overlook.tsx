
import { useState } from "react"
import { Container, Box, Text, Heading, SimpleGrid, Button, Flex } from "@chakra-ui/react"
import { TableOrder } from "@/components/Parts/TableOrder"
import { LuMoon, LuSun } from "react-icons/lu"
import { changeHtmlColorScheme } from "@/components/Functions/ChangeTheme"

import '@/css/TableOrder.css'


export const Overlook = () => {
    const [tableList, setTableList] = useState<string[]>(["1", "2", "3", "4", "5", "6"])
    const [colorModeTag, setColorModeTag] = useState<string>('')
    const [currIcon, setCurrIcon] = useState('LuMoon')

    const changedColorMode = ()=>{
        if(colorModeTag==''){
            setColorModeTag('#524C42')
            return
        }
        setColorModeTag('')
    }

    const changeColorCurrIcon = ()=>{
        if(currIcon == 'LuMoon'){
            setCurrIcon('LuSun')
            return
        }
        setCurrIcon('LuMoon')
    }

    return (
        <Container h='100' paddingBottom='5' id="contOverlook">
            <Box>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Box>
                        <Heading p="15px">Tables</Heading>
                        <Text ml="30px">Here you can see all tables and their orders</Text>
                    </Box>
                    <div onClick={()=>{
                        changedColorMode()
                        changeColorCurrIcon()
                        changeHtmlColorScheme()
                    }}>
                        <Button>
                            {
                                currIcon=="LuMoon"
                                ?
                                <LuMoon/>
                                :
                                <LuSun/>
                            }
                        </Button>
                    </div>
                </Flex>
            </Box>
            <Box marginTop={10} marginBottom={10}>
                <SimpleGrid columns={3} gap="20px">
                    {tableList.map((e, i)=>(
                        <Box bg={colorModeTag} borderWidth="2px" textAlign="center" rounded="10px" p="5px" height='min-content'>
                            {e}
                            <TableOrder key={i} tableIndex={i}></TableOrder>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Container>
    )
}