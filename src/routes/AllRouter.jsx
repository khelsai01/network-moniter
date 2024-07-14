import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Elements from '../components/Elements'
import Network from '../components/Network'
import Console from '../components/Console'
import Sources from '../components/Sources'
import Performance from '../components/Performance'
import Memory from '../components/Memory'
import Application from '../components/Application'
import Security from '../components/Security'
import Lighthouse from '../components/Lighthouse'

const AllRouter = () => {
  return (
    <Routes>
      <Route path='elements' element={<Elements />} />
      <Route path='console' element={<Console />} />
      <Route path='sources' element={<Sources />} />
      <Route path='/' element={<Network />} />
      <Route path='performance' element={<Performance />} />
      <Route path='memory' element={<Memory />} />
      <Route path='application' element={<Application />} />
      <Route path='security' element={<Security />} />
      <Route path='lighthouse' element={<Lighthouse />} />

    </Routes>
  )
}

export default AllRouter
