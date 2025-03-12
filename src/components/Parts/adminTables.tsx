import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

type Props = {
    currentTables: Number[]
}

const adminTables = ({currentTables}: Props) => {
  return (
    <Grid templateColumns={1}>
        <GridItem>
            <Grid templateColumns={6}>
                {
                    currentTables.map(item=>(
                        <GridItem>

                        </GridItem>
                    ))
                }
            </Grid>
        </GridItem>
    </Grid>
  )
}