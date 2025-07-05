import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListofCourses from './ListofCourses.jsx'
import Counter from './Counter.jsx'
import Message from './Message.jsx'
import Posts from './Posts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter/> */}
    {/* <Message msg="newww"/> */}
    <App/>
  </StrictMode>,
)
