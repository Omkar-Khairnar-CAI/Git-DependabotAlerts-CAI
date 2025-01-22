import React from 'react'
import {Box, Spinner } from "@chakra-ui/react"
export const Loader = () => {
  return (
    //styleprop will be passed
    <Box ml={'40%'} mt={'10%'}>
       <Spinner/>
    </Box>
  )
}

