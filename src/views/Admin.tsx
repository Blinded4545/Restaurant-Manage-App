
import { Box, Container, Grid, GridItem, Flex, Text, Button } from "@chakra-ui/react"
import { LuMoon, LuSun } from "react-icons/lu"
import { useState } from "react"
import {changeHtmlColorScheme  } from '@/components/Functions/ChangeTheme'

export const Admin = () => {
  
  const [currIcon, setCurrIcon] = useState('LuMoon')

  const changeColorCurrIcon = ()=>{
      if(currIcon == 'LuMoon'){
          setCurrIcon('LuSun')
          return
      }
      setCurrIcon('LuMoon')
  }

  return (
    <Container>
      <Box h='2rem' alignContent='center' pt='5px' pb='3rem'>
        {/* This is just to make the change theme button */}
        <div onClick={()=>{
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
      </Box>
      <Box p='3'>
        <Grid
        templateColumns='repeat(3, 1fr)'
        templateRows='repeat(1, 1fr)'
        gapX='4'
        minHeight='full'
        >
          <GridItem rowSpan={2} colSpan={1} bg={currIcon=='LuMoon'?'#F6B17A':'#F39F5A'} rounded='5px'>

            <Grid h='full' w='full' direction='column' justifyContent='space-evenly' alignItems='center'>

              <Grid templateColumns='repeat(2, 1fr)' alignItems='space-evenly'>
                <div>Chart 1</div>
                <div>Chart 2</div>
              </Grid>

              <div>Monthly Income</div>
              <div>Daily Avg Income</div>
              <div>Monthly Salaries</div>
            </Grid>

          </GridItem>

          <GridItem rowSpan={1} colSpan={2} h='full' rounded={3}>

            {/* MENU COMP */}
            <Flex direction='column' width='full' height='full' gap='3'>
              <Flex width='full' bg={currIcon=='LuMoon'?'#7077A1':'#7077A1'} direction='column' p='3' rounded='5px'>
                {/* Looks complicated, but it just changes the box bg*/}
                <Box>
                  <Text>Menu</Text>
                </Box>
                <Box m='10px' boxShadow='xl' rounded='10px'>
                  <Box className="scrollable">
                    <Text className="textContent" height='15rem' pl='3' pt='3'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                    </Text>
                  </Box>
                </Box>
              </Flex>

              <Flex gap='3' width='full' h='1/2'>

                {/* TABLES COMP */}
                <Flex width='full' bg={currIcon=='LuMoon'?'#7077A1':'#7077A1'} direction='column' p='3' rounded='5px'>
                {/* Looks complicated, but it just changes the box bg*/}
                  <Box>
                    <Text>Tables</Text>
                  </Box>
                  <Box m='10px' boxShadow='xl' rounded='10px'>
                    <Box className="scrollable">
                      <Text className="textContent" height='10rem' pl='3' pt='3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                      </Text>
                    </Box>
                  </Box>
                </Flex>
                
                {/* EMPLOYEES COMP */}
                <Flex width='full' bg={currIcon=='LuMoon'?'#7077A1':'#7077A1'} direction='column' p='3' rounded='5px'>
                {/* Looks complicated, but it just changes the box bg*/}
                  <Box>
                    <Text>Employees</Text>
                  </Box>
                  <Box m='10px' boxShadow='xl' rounded='10px'>
                    <Box className="scrollable" >
                      <Text className="textContent" height='10rem' pl='3' pt='3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  )
}