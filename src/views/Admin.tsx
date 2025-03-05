
import { Box, Container, Grid, GridItem } from "@chakra-ui/react"

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
          a
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg='blue.100' rounded={3}>
          b
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg='blue.100' rounded={3}>
          c
        </GridItem>
      </Grid>
    </Container>
  )
}