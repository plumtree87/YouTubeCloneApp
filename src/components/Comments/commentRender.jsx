import React from 'react';

const CommentRender = (props) => {
    console.log(props.comment)
    return (
        <div id="replyCommentScroll" className="scroll">
       Reply to: {props.comment.comment} __
        Original Comment ID: {props.comment.id} __

     Using this Comment ID, we could have a model for replies that uses this as the foreign key, so that all replies for THIS commment could be rendered
     This box would be scroll-y and have small edit/delete buttons on each reply-comment
     This component (the one rendering this message) would probably need to have it's own state, for the replies that would be retrieved from axios.


        </div>
    
       
    )
};
export default CommentRender;

// I did not create the model that I would need. I think one way to go about this, is creating a new model that uses the comment ID, as the foreign key to 
// a second model, so that
// when the comment comes into this CommentRender div, I can have a function that will match that ID to the replies model as a foreign key, and then I can display
// all the replies that were replies to this comment, using it's primary key that they're connected by..

// So, I would need to get axios and look at a model that all of their foreign keys belong to which ever comment props.comment.id value is.. 