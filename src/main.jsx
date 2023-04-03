import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './assets/components/About/About';
import Contact from './assets/components/Contact/Contact';
import Header from './assets/components/Header/Header';
import Home from './assets/components/Home/Home';
import First from './assets/components/First/First';
import Friends from './assets/components/Friends/Friends';
import FriendDetail from './assets/components/FriendDetail/FriendDetail';
import Posts from './assets/components/Posts/Posts';
import PostDetail from './assets/components/PostDetail/PostDetail';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <First></First>
        },
        {
          path: '/friends',
          element: <Friends></Friends>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: 'friend/:friendId',
          element: <FriendDetail></FriendDetail>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        {
          path: '/posts',
          element: <Posts></Posts>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
        },
        {
          path: 'post/:postId',
          element: <PostDetail></PostDetail>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '*',
          element: <div>4444444444444404444444</div>
        }
      ]
    }
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
