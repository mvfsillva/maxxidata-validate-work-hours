import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from 'components/header'
import Footer from 'components/footer'
import Main from 'components/main'

const Home = () => (
  <>
    <Header />
    <Main />
    <Footer />
    <ToastContainer containerId="toastify" draggable={false} />
  </>
)

export default Home
