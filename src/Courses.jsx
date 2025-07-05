import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Courses({ course ,onDelete }) {
  const [likes, setLikes] = useState(100);

  return (
    <div className="col-md-3 col-sm-2 my-1">
      <div className="card" style={{ width: "18rem" }}>
        <Link to={`/courseDetails/${course.id}`}>
          <img
            src={course.imageUrl}
            className="card-img-top"
            alt={course.imageUrl}
            height="175px"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <p className="card-text">
            <Rating rating={course.rating} />
          </p>
          <p className="card-text">Price : {course.price}</p>
          <button className="btn btn-primary" onClick={() => setLikes(likes + 1)}>
            Likes : {likes} <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(course._id)}>
            Delete <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;





// import React from "react";
// import {Link} from "react-router-dom"
// import Rating from "./Rating";
// import { useState } from "react";

// class Courses extends React.Component{

//       const [likes , setLikes] = useState(100);
//       // state={currlikes:100};
//       // incrementLikes(){
//       //   console.log("u clicked it");
//       //   this.setState({currlikes:this.state.currlikes+1});
//       // }
//     render(){
//     // let ratings=[];
//     // for(let i=0;i<this.props.course.rating;i++){
//     //   ratings.push(
//     //       <i
//     //       className="fa-solid fa-star"
//     //       key={i}
//     //       style={{ color: "orange" }}
//     //     ></i>,
//     //   )
//     // }
//         return(
//             <>
//             {/* <img src={this.props.course.imageUrl} width="10" height="10"/>
//             <h1><b>Title : {this.props.course.title}</b></h1>
//             <h2>Rating : {this.props.course.rating}</h2>
//             <h3>Price : {this.props.course.price}</h3>
//             <button class="btn btn-danger">Likes : {this.props.course.likes}</button> */}
//          <div className="col-md-3 col-sm-2 my-1">   
//           <div class="card" style={{width: "18rem"}}>
//           <Link to={`/courseDetails/${this.props.course.id}`}>
//         <img src={this.props.course.imageUrl} class="card-img-top" alt={this.props.course.imageUrl} height="175px"/>
//         </Link>
//         <div class="card-body">
//           <h5 class="card-title">{this.props.course.title}</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//           <p class="card-text"><Rating rating={this.props.course.rating}/></p>
//           <p class="card-text">Price : {this.props.course.price}</p>
//           <button class="btn btn-primary" onClick={()=>setLikes}>Likes : {this.state.currlikes} {" "}
//             <i className="fa-solid fa-thumbs-up"></i></button>
//         </div>
//       </div>
//       </div>
            
//           </>
//         );
//       }
//     }

// export default Courses;