
import { Box, Container, Grid, GridItem, Flex, Text } from "@chakra-ui/react"

export const Admin = () => {
  return (
    <Container>
      <Box h={50}>
        abc
      </Box>
      <Grid
       templateColumns='repeat(3, 1fr)'
       templateRows='repeat(2, 1fr)'
       gapX='4'
       gapY='2'
       h='500px'
       pt={10}
      >
        <GridItem rowSpan={2} colSpan={1} bg='red.100' rounded={3}>
          <Grid h='full' w='max' direction='column' justifyContent='space-evenly' alignItems='center'>
            <Grid templateColumns='repeat(2, 1fr)' alignItems='space-evenly'>
              <div>Chart 1</div>
              <div>Chart 2</div>
            </Grid>
            <div>Monthly Income</div>
            <div>Daily Avg Income</div>
            <div>Monthly Salaries</div>
          </Grid>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg='blue.100' rounded={3}>
          <Grid templateColumns='repeat(1, 1fr)' templateRows='repeat(3, 1fr)' m='5' gapY='3'>
            <GridItem rowSpan={1}>
              <Text>Menu</Text>
            </GridItem>
            <GridItem rowSpan={3}>
              <Box h='full' bg='red' rounded='md' h='full' overflow='scroll'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium itaque eos laudantium consequatur ea vero cum, sint rem distinctio sit recusandae nesciunt enim ipsam amet dolorum reprehenderit architecto! Accusamus, labore!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptate commodi veniam doloremque at vitae exercitationem laboriosam praesentium adipisci suscipit magnam quisquam alias, sint nisi ea libero. Sed, reprehenderit omnis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit, pariatur harum expedita temporibus iste, deleniti accusantium cupiditate quas enim, culpa sunt dolorum magnam voluptatibus ad autem esse sit. Aut.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque, voluptatibus consequatur vitae maxime nulla perspiciatis reiciendis! Eveniet exercitationem maiores voluptatum voluptates error, officiis minus excepturi natus inventore perferendis laudantium!
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg='blue.100' rounded={3}>
          Tables
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg='blue.100' rounded={3}>
          Employees
        </GridItem>
      </Grid>
    </Container>
  )
}