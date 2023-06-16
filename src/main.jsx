import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Error.jsx';
import Blogx from './Blogx.jsx';
import AllToy from './AllToy.jsx';
import MyToy from './MyToy.jsx';
import SignUp from './SignUp.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import AuthConte from './AuthConte.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import AddToy from './AddToy.jsx';
import ToyDetails from './ToyDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },{
        path: '/login',
        element: <Login/>
      },{
        path: '/signUp',
        element: <SignUp/>
      },{
        path: '/allToy',
        element: <AllToy/>
      },{
        path: '/myToy',
        element: <PrivateRoute><MyToy/></PrivateRoute>,
        loader: () => fetch('https://assignment1111.vercel.app/toy')
      },{
        path: '/addToy',
        element: <PrivateRoute><AddToy/></PrivateRoute>
      },{
        path: '/toy/:serial',
        element: <PrivateRoute><ToyDetails/></PrivateRoute>,
        // loader: ({params}) => fetch(`http://localhost:5000/toy/${params._id}`)
      },{
        path: '/blog',
        element: <Blogx/>
      }
    ]
  }, {
    path: '*',
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthConte>
      <RouterProvider router={router} />
    </AuthConte>
  </React.StrictMode>,
)
