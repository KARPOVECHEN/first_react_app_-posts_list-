import React from "react";
import { useState } from "react";


export default function CommentsBox() {

    // const[count,setCount]=useState(0);
    const[comment,setComment]=useState([]);

    let myRef=React.createRef();


//     let handler= () => {

//         let currentCount = count;
//         currentCount++;
//         setCount(currentCount);
// }

    let addComment = () => {

        let commentValue = myRef.current.value;
        let comments = [...comment,commentValue];
        setComment(comments);
        myRef.current.value='';
    }

    return(
<>
{/* <h1>State</h1>
<div>
    <button onClick={handler}>Click</button>
</div>
<div>
    {count}
</div> */}

<div>
    <textarea ref={myRef}></textarea>
</div>
<div>
    <button onClick={addComment}>ADD COMMENT</button>
</div>
<div>
    {comment.map((item,index)=><li key={index.toString()}>{item}</li>)}
</div>
</>
    );
}

