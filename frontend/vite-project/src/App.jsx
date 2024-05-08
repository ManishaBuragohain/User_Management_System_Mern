
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import UserTable from './Table/UserTable';
import {Toaster} from "react-hot-toast"

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <UserTable/>
    <Toaster/>
    
    </>
  )
}

export default App
