import React from 'react';

const CommentRender = (props) => {
    console.log(props.comment)
    return (
        <div className="container">
            <div className="col">
        <li>
            {props.comments}
        </li>
        </div>
        </div>
    
       
    )
};
export default CommentRender;