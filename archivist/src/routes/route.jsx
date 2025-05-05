import {createBrowserRouter} from 'react-router-dom'
import Register from '../views/Register'
import AddBooks from '../views/AddBooks'

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Register/>
    },
    {
        path:'/addBooks',
        element:<AddBooks/>
    }
])
export default routes