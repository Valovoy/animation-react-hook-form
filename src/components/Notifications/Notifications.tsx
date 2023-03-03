import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormErrorMessage = () => (
  <ToastContainer
    position="top-right"
    autoClose={1000}
    limit={3}
    hideProgressBar
    newestOnTop
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover={false}
    theme="colored"
  />
)

export default FormErrorMessage
