import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage'
import AuthenticationPage from './pages/AuthenticationPage'
import { AuthContext } from './context/AuthContext'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/dates/styles.css';

const App = () => {
  const [test, setTest] = useState('')
  // useEffect(() => {
  //   axios.get('http://localhost:4444/').then((res) => {
  //     setTest(res.data)
  //   })
  // }, [])
  const Layout=()=>{
    const [isSignedUp, setIsSignedUp] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
      <div className="app">  
        <MantineProvider>
          <Outlet/>
        </MantineProvider>
      </div>
    )
  }
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "*",
          element: <DashboardPage />,
        },
      ],
    },
  ]);
  const AuthRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "*",
          element: < AuthenticationPage/>,
        },
      ],
      
    },
  ]);

  const {loginState, setLoginState} = useContext(AuthContext)
  const router = loginState ? AppRouter : AuthRouter

  console.log(loginState)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App