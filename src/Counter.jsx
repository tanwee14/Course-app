import { useState } from "react";

var Counter = () =>{
    const[count,setCount] = useState(100);
    return(
        <>
        <p>Count : {count}</p>
        <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}> COUNT INCREMENT</button>
        <br/>
        {/* hooks cannot be used in class based components */}
        <button className="btn btn-primary" onClick={()=>{setCount(count-1)}}> COUNT DECREMENT</button>
        </>
    );
}

export default Counter;