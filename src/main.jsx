import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
import Todos from './Components/Todos/Todos';
import TodoDetails from './Components/TodoDetails/TodoDetails';
import ErrorPage from './ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>
      },
      {
        path: "/post/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: "/todos",
        loader: () => fetch("https://jsonplaceholder.typicode.com/todos"),
        element: <Todos></Todos>
      },
      {
        path: "/todo/:todoId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`),
        element: <TodoDetails></TodoDetails>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
