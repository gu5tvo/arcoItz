import MakeRoutes from './routes';
import { GlobalStyle } from './styles/globalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        limit={3}
        closeOnClick
      />
      <GlobalStyle />
      <MakeRoutes />
      <GlobalStyle/>
    </>
  )
}
