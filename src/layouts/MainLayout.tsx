import styled from '@emotion/styled'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <MainWrapperCss>
        <Outlet />
      </MainWrapperCss>
      <Footer />
    </div>
  )
}

export default MainLayout

const MainWrapperCss = styled.div`
  min-height: 75vh;
`
