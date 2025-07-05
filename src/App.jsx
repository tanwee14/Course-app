import React from 'react'
import './App.css'
import Message from './Message';
import Posts from './Posts';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import CourseDetails from './CourseDetails';
import ListofCourses from './ListofCourses';
import Navbar from './Navbar';

// class App extends React.Component{
//   render(){
//     // var messages = [{to:"hi" , from:"bye"},
//     // {to:"annyeonghaseyo" , from:"annyeong"},
//     // {to:"namaste" , from:"kal milte haiii"}] // if we want multiple elements to be displayed we need array with map method
//     return(    
//     <>
//     {
//     //   messages.map(m=>(
//     //     <Message messagedetails={m}/>
//     //   ))
//     // <Posts/>
//     // <ListofCourses/>

//     <BrowserRouter>
//       <Link to="/post"> Posts</Link>

//       <Routes>
//         <Route path="/" Component={<ListofCourses/>}/>
//         <Route path="/post" Component={<Posts/>}/>
//       </Routes>
//     </BrowserRouter>
//       </>
//     }



//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
        <BrowserRouter>
          {/* <Link to="/post">Posts  </Link>
          <br/>
          <Link to="/">ListofCourses  </Link>
          <br/>
          <Link to="/courseDetails">Course Details</Link> */}
          <Routes>
            {/* <Route path="/courseDetails" element={<CourseDetails/>}/> */}
            <Route path="/" element={<ListofCourses />} />
            <Route path="/courseDetails/:id" element={<CourseDetails />} />
            <Route path="/post" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}



export default App
