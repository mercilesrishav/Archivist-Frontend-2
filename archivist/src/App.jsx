import React from 'react'
import {RouterProvider} from "react-router-dom"
import routes from './routes/Route'

const App = () => {
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
