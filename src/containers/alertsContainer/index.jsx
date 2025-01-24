import { Box } from '@chakra-ui/react'
import React from 'react'
import { MiniAlertContainer } from '../index'

export const AlertsContainer = ({REPO_NAME}) => {
  // should have conditional rendering for different types - [minimalistic view and expanded view]
  return (
    <>
      {/* minimalistic view of container component */}
      <MiniAlertContainer REPO_NAME={REPO_NAME}/>
    </>
  )
}