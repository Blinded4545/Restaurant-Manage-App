
import { Box, Container, Grid, GridItem, Flex, Text } from "@chakra-ui/react"

export const Admin = () => {
  return (
    <Container>
      <Box h='2rem' alignContent='center'>
        abc
      </Box>
      <Box p='3'>
        <Grid
        templateColumns='repeat(3, 1fr)'
        templateRows='repeat(1, 1fr)'
        gapX='4'
        gapY='2'
        minHeight='full'
        >
          <GridItem rowSpan={2} colSpan={1} bg='red.100' rounded='5px'>
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
              <Flex width='full' bg='green.100' direction='column' p='3' rounded='5px'>
                <Box>
                  <Text>Menu</Text>
                </Box>
                <Box>
                  <Box>
                    <Text height='15rem' overflow='scroll'>
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
                <Flex width='full' bg='green.100' direction='column' p='3' rounded='5px'>
                  <Box>
                    <Text>Tables</Text>
                  </Box>
                  <Box>
                    <Box>
                      <Text height='10rem' overflow='scroll'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit dolor quia autem ab aut quis asperiores recusandae tempora id assumenda corrupti saepe sit exercitationem atque, minima repellendus ducimus cum.
                      </Text>
                    </Box>
                  </Box>
                </Flex>
                
                {/* EMPLOYEES COMP */}
                <Flex width='full' bg='green.100' direction='column' p='3' rounded='5px'>
                  <Box>
                    <Text>Employees</Text>
                  </Box>
                  <Box>
                    <Box>
                      <Text height='10rem' overflow='scroll'>
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