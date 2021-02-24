// Packages
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Containers
import Header from 'components/header'
import Main from 'components/main'

const Home = () => (
  <>
    <Header />
    <Main />
    <ToastContainer containerId="toastify" draggable={false} />
  </>
)

export default Home
