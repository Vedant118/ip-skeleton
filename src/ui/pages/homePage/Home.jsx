import React from 'react'
import TopBar from '../../components/topBar/TopBar'
import { Box } from '@mui/material'
import Sidebar from '../../components/sideBar/Sidebar'
import Guidline from '../../components/Guidline/Guidline'
import CompletedTask from '../../components/Completedtask/CompletedTask'
import UpdateReminder from '../../components/Update_and_remainder/Update&Remainder'

function Home() {
  return (
    <Box>
        <TopBar/>
      <Box
      sx={{
        display:'flex',
      }}
      >
      <Sidebar/>
    <Box
     sx={{
        display:'flex',
        padding:'10px',
        gap:'10px',
      }}
    >
    <UpdateReminder/>
    <Box
    sx={{
        display:'flex',
        flexDirection:'column',
        gap:'10px'
    }}
    >
    <Guidline/>
    <CompletedTask/>
    </Box>
    </Box>
      </Box>
    </Box>
  )
}

export default Home